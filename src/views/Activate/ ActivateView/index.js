import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';

function ActivateView(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

ActivateView.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flex: 1,
    marginTop: '2%',
    marginLeft: '2%',
    padding: 'none'
  },
  tabs: {
    justifyContent: 'left',
    width: '40%',
    textAlign: 'none !important',
    alignItems: 'left'
  },
  list: {
    textTransform: 'none',
    marginBottom: -15,
    fontWeight: 600,
    alignItems: 'none',
    justifyContent: 'left',
    width: 'auto',
    textAlign: 'left'
  },
  listlast: {
    textTransform: 'none',
    fontWeight: 600,
    alignItems: 'left',
    justifyContent: 'left',
    width: 'auto',
    textAlign: 'left'
  },
  box: {
    padding: 'none',
    marginLeft: '30%'
  },
  field: {
    width: '100%',
    marginBottom: 4
  },
  fields: {
    width: '50%',
    marginBottom: 4
  },
  button: {
    width: '100%',
    marginBottom: 4,
    marginTop: 10,
    textTransform: 'none'
  },
  buttons: {
    width: '50%',
    marginBottom: 4,
    marginTop: 10,
    textTransform: 'none'
  },
  introtext: {
    color: '#3f4d52'
  },
  introtexts: {
    color: '#3f4d52',
    width: '75%'
  },
  introtext2: {
    color: '#3f4d52',
    width: '50%'
  },
  introsubtext: {
    color: '#111213',
    width: '50%',
    fontWeight: 700,
    marginTop: 50,
    fontSize: 12
  },
  introtitle: {
    color: '#3f4d52',
    fontSize: 30,
    fontWeight: '700'
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          className={classes.list}
          label="Business structure"
          {...a11yProps(0)}
        />
        <Tab
          className={classes.list}
          label="Business representative"
          {...a11yProps(1)}
        />
        <Tab
          className={classes.list}
          label="Business details"
          {...a11yProps(2)}
        />
        <Tab
          className={classes.list}
          label="Fulfillment details"
          {...a11yProps(3)}
        />
        <Tab
          className={classes.list}
          label="Support information"
          {...a11yProps(4)}
        />
        <Tab className={classes.list} label="Bank details" {...a11yProps(5)} />
      </Tabs>
      <ActivateView classname={classes.box} value={value} index={0}>
        <Typography className={classes.introtitle}>
          Tell us about your business
        </Typography>
        <Typography className={classes.introtexts}>
          Before you can accept payments with Fapshi, we need to learn more
          about you and your business. We collect this information to comply
          with requirements from regulators and financial partners and the terms
          of our Services Agreement.
        </Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Registered business address
          </FormLabel>
          <TextField
            className={classes.fields}
            placeholder="Address line 1"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.fields}
            placeholder="Address line 2"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.fields}
            placeholder="City"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.fields}
            placeholder="country"
            id="outlined-size-small"
            defaultValue="Cameroon"
            variant="outlined"
            size="small"
            disabled
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.root}>
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            State
          </FormLabel>
          <Select
            className={classes.fields}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value="{age}"
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="South west">South west</MenuItem>
            <MenuItem value="Littoral">Littoral</MenuItem>
            <MenuItem value="Center">Center</MenuItem>
            <MenuItem value="North West">Noth West</MenuItem>
            <MenuItem value="West">West</MenuItem>
            <MenuItem value="East">Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className={classes.root}
          noValidate
          autoComplete="off"
          disabled
        ></FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Company phone number
          </FormLabel>
          <TextField
            className={classes.fields}
            placeholder="ex: +237 673881257"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.root}>
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Type of business
          </FormLabel>
          <Select
            className={classes.fields}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value="{age}"
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            className={classes.buttons}
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
      <ActivateView classname={classes.box} value={value} index={1}>
        <Typography className={classes.introtext}>Personal details</Typography>
        <Typography className={classes.introtext}>
          Tell us a few details about yourself.
        </Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <div>
            <FormLabel style={{ marginBottom: 10 }} component="legend">
              Legal Name of Person
            </FormLabel>
            <TextField
              className={classes.field}
              label="first name"
              placeholder="first name"
              id="outlined-size-small"
              defaultValue=""
              variant="outlined"
              size="small"
            />
            <TextField
              className={classes.field}
              placeholder="last name"
              defaultValue=""
              variant="outlined"
              size="small"
            />
          </div>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Email address
          </FormLabel>
          <TextField
            className={classes.field}
            label="email address"
            placeholder="you@example.com "
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
            type="email"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Date of birth
          </FormLabel>
          <TextField
            className={classes.field}
            type="date"
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Home address
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="Address line 1"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="Address line 2"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="City"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="ZIP"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <InputLabel id="demo-simple-select-outlined-label" label="State">
            State
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value="State"
            onChange={handleChange}
            label="State"
          >
            <MenuItem value="South west">South west</MenuItem>
            <MenuItem value="Littoral">Littoral</MenuItem>
            <MenuItem value="Center">Center</MenuItem>
            <MenuItem value="North West">Noth West</MenuItem>
            <MenuItem value="West">West</MenuItem>
            <MenuItem value="East">Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className={classes.root}
          noValidate
          autoComplete="off"
          disabled
        >
          <InputLabel
            id="demo-simple-select-disabled-label"
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Cameroon as default country
          </InputLabel>
          <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value="Cameroon"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Phone number
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="ex: +237 673881257"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Identity Card Number
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="ex: SWE7983JN3IH3H3I"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <Typography
            style={{ color: '#546e7a', fontWeight: 400, fontSize: 12 }}
          >
            To verify your identity, we’ll need to know your full Valid Identity
            Card Number.
          </Typography>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
      <ActivateView classname={classes.box} value={value} index={2}>
        <Typography className={classes.introtitle}>Business Details</Typography>
        <Typography className={classes.introtext}>
          Tell us some basics about your business
        </Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Industry
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="industry"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Business webiste
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="www.fapshi.com"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Product description
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="description"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
            multiline
            rows={4}
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
      <ActivateView classname={classes.box} value={value} index={3}>
        <Typography className={classes.introtitle}>
          Fulfillment Details
        </Typography>
        <Typography className={classes.introtext}>
          Tell us some basics about how you deliver products.
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Do you sell physical goods</FormLabel>
          <RadioGroup
            row
            small
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio />}
              label="Yes"
              small
            />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            On average, how long after paying will your customers typically
            receive their goods or services?
          </FormLabel>
          <Select
            className={classes.field}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value="State"
            onChange={handleChange}
            label="State"
          >
            <MenuItem value="one day">within one day</MenuItem>
            <MenuItem value="one week">within one week</MenuItem>
            <MenuItem value="one month">within one month</MenuItem>
            <MenuItem value="other">morethan one month</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
      <ActivateView classname={classes.box} value={value} index={4}>
        <Typography className={classes.introtitle}>
          Support Information
        </Typography>
        <Typography className={classes.introtext}>
          Tell us some basics about how you deliver products.
        </Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Statement descriptor
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="Statement descriptor"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <Typography></Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Shortened descriptor
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="Statement descriptor"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <Typography></Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Registered business address
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="Address line 1"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="Address line 2"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="City"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.field}
            placeholder="country"
            id="outlined-size-small"
            defaultValue="Cameroon"
            variant="outlined"
            size="small"
            disabled
          />
        </FormControl>
        <FormControl variant="outlined" className={classes.root}>
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            State
          </FormLabel>
          <Select
            className={classes.field}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value="{age}"
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="South west">South west</MenuItem>
            <MenuItem value="Littoral">Littoral</MenuItem>
            <MenuItem value="Center">Center</MenuItem>
            <MenuItem value="North West">Noth West</MenuItem>
            <MenuItem value="West">West</MenuItem>
            <MenuItem value="East">Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <FormLabel
            style={{ marginBottom: 10, marginTop: 10 }}
            component="legend"
          >
            Phone number
          </FormLabel>
          <TextField
            className={classes.field}
            placeholder="ex: +237 673881257"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
          />
        </FormControl>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
      <ActivateView classname={classes.box} value={value} index={5}>
        <Typography className={classes.introtitle}>
          Select an account for payouts{' '}
        </Typography>
        <Typography className={classes.introtext2}>
          A payout is the transfer of funds from Stripe to your bank account.
          Link your account to seamlessly receive payouts and help us better
          understand your business.
        </Typography>
        <Typography className={classes.introsubtext}>
          Linking your account will allow Stripe to regularly receive, store and
          use your account data to assess your eligibility for financial
          services. By selecting your financial institution, you agree to the
          Stripe Privacy Policy, Finicity Terms and Conditions, and Finicity
          Privacy Policy. You may unlink your account(s) at any time. Learn
          more.
        </Typography>
        <Typography className={classes.root}>
          <Link href="#">Enter bank details manually instead</Link>
        </Typography>
        <FormControl className={classes.root} noValidate autoComplete="off">
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            endIcon={<ArrowForwardIcon>send</ArrowForwardIcon>}
            {...a11yProps(1)}
            type="submit"
            onClick={handleClick}
            value={value}
          >
            Next
          </Button>
        </FormControl>
      </ActivateView>
    </div>
  );
}

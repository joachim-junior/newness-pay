import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { ArrowRight as ArrowRightIcon } from 'react-feather';

const useStyles = makeStyles(theme => ({
  root: {
    width: '96%',
    margin: 20
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 600,
    color: '#375fd0'
  }
}));

export default function Accordation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {'Build your payments intergration'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              'Browse our developer docs to integrate Stripe into your website or app.'
            }{' '}
            <br />
            <Button size="small" variant="contained" color="primary">
              {'Explore docs'}
              <ArrowRightIcon size="16" />
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {'Get your test API keys'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse'
            }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading} style={{ color: '#151414' }}>
            {'The email Joachimchiss@gmail.com has not been verified'}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}

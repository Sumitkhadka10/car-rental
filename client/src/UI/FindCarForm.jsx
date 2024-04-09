import React from 'react';
import '../styles/find-car-form.css';

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const FindCarForm = () => {
  return (
    <Form>
      <div className='d-flex align-items-center justify-content-between flex-wrap'>
        <FormGroup className='form__group'>
          <Label for='pickupLocation'>Pickup Location</Label>
          <Input type='text' name='pickupLocation' id='pickupLocation' placeholder='Enter pickup location' />
        </FormGroup>
        <FormGroup className='form__group'>
          <Label for='dropoffLocation'>Drop-off Location</Label>
          <Input type='text' name='dropoffLocation' id='dropoffLocation' placeholder='Enter drop-off location' />
        </FormGroup>
        <FormGroup className='form__group'>
          <Label for='pickupDate'>Pickup Date</Label>
          <Input type='date' name='pickupDate' id='pickupDate' />
        </FormGroup>
        <FormGroup className='form__group'>
          <Label for='dropoffDate'>Drop-off Date</Label>
          <Input type='date' name='dropoffDate' id='dropoffDate' />
        </FormGroup>
        <FormGroup className='form__group'>
          <Button color='primary'>Find Car</Button>
        </FormGroup>
      </div>
    </Form>
  )
}

export default FindCarForm;

import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';


const availableTimes = ['17:00', '17:30'];
const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
const today = new Date().toISOString().split('T')[0];
const dispatch = jest.fn();
const submitForm = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes}/>);
  const headingElement = screen.getByText(/Table reservation/);

  expect(headingElement).toBeInTheDocument();
});

test('Should correctly render all fields and their default values', async () => {
  render(
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );

  const firstNameInput = screen.getByLabelText(/First Name/);
  const lastNameInput = screen.getByLabelText(/Last Name/);
  const contactNumber = screen.getByLabelText(/Contact Number/);
  const dateInput = screen.getByLabelText(/Choose date/);
  const timeSelect = screen.getByLabelText(/Choose time/);
  const timeOptions = await screen.findAllByTestId('booking-time-option');
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const occasionSelect = screen.getByLabelText(/Occasion/);
  const occasionOptions = await screen.findAllByTestId(`occasion-option`);
  const submitButton = screen.getByRole('button');

  expect(firstNameInput).toBeInTheDocument();
  expect(firstNameInput).toHaveAttribute('type', 'text');
  expect(firstNameInput).toHaveAttribute('id', 'first-name');
  expect(firstNameInput).toHaveValue('');

  expect(lastNameInput).toBeInTheDocument();
  expect(lastNameInput).toHaveAttribute('type', 'text');
  expect(lastNameInput).toHaveAttribute('id', 'last-name');
  expect(lastNameInput).toHaveValue('');

  expect(contactNumber).toBeInTheDocument();
  expect(contactNumber).toHaveAttribute('type', 'text');
  expect(contactNumber).toHaveAttribute('id', 'contact-number');
  expect(contactNumber).toHaveValue('');

  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('id', 'res-date');
  expect(dateInput).toHaveValue(today);

  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect).toHaveAttribute('id', 'res-time');
  expect(timeOptions.length).toBe(2);

  expect(numberOfGuestsInput).toBeInTheDocument();
  expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
  expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
  expect(numberOfGuestsInput).toHaveValue(1);

  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect).toHaveAttribute('id', 'occasion');
  expect(occasionOptions.length).toBe(4);

  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
  expect(submitButton).toBeEnabled();
  });

test('Should have one or more available booking time options', async () => {
  render(<BookingForm availableTimes={availableTimes}/>);
  const timeOptions = await screen.findAllByTestId('booking-time-option');

  expect(timeOptions.length).toBeGreaterThanOrEqual(1);
  timeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
});


test('Should update available booking time options when changing booking date', async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
  );

  const bookingDate = '2024-05-25';
  const dateInput = screen.getByLabelText(/Choose date/);
  const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
  fireEvent.change(dateInput, { target: { value: bookingDate } });
  fireEvent.blur(dateInput);
  const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');
 console.log(updatedTimeOptions)
  expect(dateInput).toHaveValue(bookingDate);
  initialTimeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
  updatedTimeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
});


test('Should successfully submit form with default values', async() => {
  render(
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).toHaveBeenCalledWith({
    firstName: "",
    lastName: "",
    contactNumber: "",
    date: today,
    time: availableTimes[0],
    noOfGuests: 1,
    occasion: "",
  });
});

test(`Input is invalid when first name field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/First Name/);
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();
});

test(`Input is invalid when last name field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Last Name/);
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();
});

test(`Input is invalid when contact number field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Contact Number/);
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();
});

test(`Input is invalid when date field's value is empty`, async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Choose date/);
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);
  expect(input).toBeInvalid();
});

test('Input is invalid when date input is set to a date before today', () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Choose date/);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  fireEvent.change(input, { target: { value: yesterdayStr } });
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();
});

test(`Input is invalid when number of guests field's value is empty`, async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Number of guests/);
  fireEvent.change(input, { target: { value: '' } });
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);
  expect(input).toBeInvalid();
});

test(`Input is invalid when number of guests field's value is less than 1 or grater than 10`, async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Number of guests/);
  fireEvent.change(input, { target: { value: 0 } });
  fireEvent.blur(input);
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();

  fireEvent.change(input, { target: { value: 11 } });
  fireEvent.blur(input);
  fireEvent.click(submitButton);

  expect(input).toBeInvalid();
});
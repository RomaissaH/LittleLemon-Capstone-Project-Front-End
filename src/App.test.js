import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initialiseTimes, updateTimes } from './pages/Main';


const availableTimes = ['17:00', '17:30'];
const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
const today = new Date().toISOString().split('T')[0];
const dispatch = jest.fn();
const submitForm = jest.fn();

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const headingElement = screen.getByText(/Table reservation/);

  expect(headingElement).toBeInTheDocument();
});

test('Should correctly render all fields and their default values', async () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
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
  expect(firstNameInput).toHaveAttribute('required');
  expect(firstNameInput).toHaveValue('');

  expect(lastNameInput).toBeInTheDocument();
  expect(lastNameInput).toHaveAttribute('type', 'text');
  expect(lastNameInput).toHaveAttribute('id', 'last-name');
  expect(lastNameInput).toHaveAttribute('required');
  expect(lastNameInput).toHaveValue('');

  expect(contactNumber).toBeInTheDocument();
  expect(contactNumber).toHaveAttribute('type', 'text');
  expect(contactNumber).toHaveAttribute('id', 'contact-number');
  expect(contactNumber).toHaveAttribute('required');
  expect(contactNumber).toHaveValue('');

  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('id', 'res-date');
  expect(dateInput).toHaveAttribute('required');
  expect(dateInput).toHaveValue(today);

  expect(timeSelect).toBeInTheDocument();
  expect(timeSelect).toHaveAttribute('id', 'res-time');
  expect(timeSelect).toHaveAttribute('required');
  expect(timeOptions.length).toBe(2);

  expect(numberOfGuestsInput).toBeInTheDocument();
  expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
  expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
  expect(numberOfGuestsInput).toHaveAttribute("min", '1');
  expect(numberOfGuestsInput).toHaveAttribute("max", '10');
  expect(numberOfGuestsInput).toHaveAttribute('required');
  expect(numberOfGuestsInput).toHaveValue(1);

  expect(occasionSelect).toBeInTheDocument();
  expect(occasionSelect).toHaveAttribute('id', 'occasion');
  expect(occasionOptions.length).toBe(4);

  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toHaveAttribute('type', 'submit');
  expect(submitButton).toBeDisabled();
});

test('Should have one or more available booking time options', async () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);
  const timeOptions = await screen.findAllByTestId('booking-time-option');

  expect(timeOptions.length).toBeGreaterThanOrEqual(1);
  timeOptions.forEach(timeOption =>
    expect(timeOption.value).toMatch(timeFormat)
  );
});

test('Should initialiseTimes function work as expected', () => {
  expect(initialiseTimes().times).toStrictEqual([]);
});

test('Should updateTimes function work as expected', () => {
  expect(
    updateTimes(
      { times: availableTimes },
      { type: 'UPDATE_TIMES', payload: { times: availableTimes } }
    )
  ).toStrictEqual({ times: ['17:00', '17:30'] });
});


test('Should successfully submit form with valid values', async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const FirstNameInput = screen.getByLabelText(/First Name/);
  fireEvent.change(FirstNameInput, { target: { value: "Romaissa" } });

  const LastNameInput = screen.getByLabelText(/Last Name/);
  fireEvent.change(LastNameInput, { target: { value: "H" } });

  const PhoneNumberInput = screen.getByLabelText(/Contact Number/);
  fireEvent.change(PhoneNumberInput, { target: { value: "123-456-7890" } });

  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).toHaveBeenCalled();
});

test(`Submit button is disabled when first name field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/First Name/);
  fireEvent.blur(input);
  const LastNameInput = screen.getByLabelText(/Last Name/);
  fireEvent.change(LastNameInput, { target: { value: "H" } });
  const PhoneNumberInput = screen.getByLabelText(/Contact Number/);
  fireEvent.change(PhoneNumberInput, { target: { value: "123-456-7890" } });
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();
});

test(`Submit button is disabled when last name field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Last Name/);
  fireEvent.blur(input);
  const FirstNameInput = screen.getByLabelText(/First Name/);
  fireEvent.change(FirstNameInput, { target: { value: "Romaissa" } });
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();
});

test(`Submit button is disabled when contact number field's value is empty`, () => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Contact Number/);
  fireEvent.blur(input);
  const FirstNameInput = screen.getByLabelText(/First Name/);
  fireEvent.change(FirstNameInput, { target: { value: "Romaissa" } });
  const LastNameInput = screen.getByLabelText(/Last Name/);
  fireEvent.change(LastNameInput, { target: { value: "H" } });
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();
});

test(`Submit button is disabled when date field's value is invalid`, async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Choose date/);
  fireEvent.change(input, { target: { value: '20/05/2024' } });
  fireEvent.blur(input);
  const FirstNameInput = screen.getByLabelText(/First Name/);
  fireEvent.change(FirstNameInput, { target: { value: "Romaissa" } });
  const LastNameInput = screen.getByLabelText(/Last Name/);
  fireEvent.change(LastNameInput, { target: { value: "H" } });
  const PhoneNumberInput = screen.getByLabelText(/Contact Number/);
  fireEvent.change(PhoneNumberInput, { target: { value: "123-456-7890" } });
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();
});

test(`Submit button is disabled when number of guests field's value is less than 1 or grater than 10`, async() => {
  render(
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
  );

  const input = screen.getByLabelText(/Number of guests/);
  fireEvent.change(input, { target: { value: 0 } });
  fireEvent.blur(input);
  const FirstNameInput = screen.getByLabelText(/First Name/);
  fireEvent.change(FirstNameInput, { target: { value: "Romaissa" } });
  const LastNameInput = screen.getByLabelText(/Last Name/);
  fireEvent.change(LastNameInput, { target: { value: "H" } });
  const PhoneNumberInput = screen.getByLabelText(/Contact Number/);
  fireEvent.change(PhoneNumberInput, { target: { value: "123-456-7890" } });
  const submitButton = screen.getByRole('button');
  fireEvent.click(submitButton);

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();

  fireEvent.change(input, { target: { value: 11 } });

  expect(submitForm).not.toHaveBeenCalled();
  expect(input).toBeInvalid();
  expect(submitButton).toBeDisabled();
});
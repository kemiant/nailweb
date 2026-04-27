'use client';

import { useState, type FormEvent } from 'react';

const services = [
  'Soft Gel Extensions',
  '3D Floral Art',
  'Luxury Manicure',
  'Press-On Set',
];

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, service, date, notes }),
    });

    if (response.ok) {
      setStatus('success');
      setMessage('Your booking request is saved. We will contact you soon.');
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setNotes('');
      setService(services[0]);
    } else {
      const data = await response.json();
      setStatus('error');
      setMessage(data?.message ?? 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Name
        <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      </label>
      <label>
        Email
        <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
      </label>
      <label>
        Phone
        <input required value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="123-456-7890" />
      </label>
      <label>
        Choose a service
        <select value={service} onChange={(event) => setService(event.target.value)}>
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Preferred date
        <input required type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      </label>
      <label>
        Notes
        <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={4} placeholder="Let us know your preferred tones or details." />
      </label>
      {message ? <p className={`booking-message ${status}`}>{message}</p> : null}
      <button type="submit" className="button button-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Book Appointment'}
      </button>
    </form>
  );
}

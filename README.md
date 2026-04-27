# Minailstore Web App

A Vercel-ready Next.js website for a soft luxury nail studio with a pink and blue pastel theme.

## Features
- Home page with soft luxury styling and service details
- Booking form that saves requests to Supabase
- Clean responsive layout for salon branding
- API route for server-side booking storage

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a Supabase project and add a `bookings` table with at least these columns:
   - `id` (uuid, primary key, default `gen_random_uuid()`)
   - `name` (text)
   - `email` (text)
   - `phone` (text)
   - `service` (text)
   - `date` (date)
   - `notes` (text)
   - `created_at` (timestamp with time zone, default `now()`)

3. Add environment variables in Vercel or a local `.env` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-public-anon-key
   SUPABASE_URL=your-supabase-url
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

4. Run locally:
   ```bash
   npm run dev
   ```

## Deployment
Deploy this repository on Vercel and configure the same Supabase environment variables in Vercel.

## Images
Place your four nail photos into `public/images/` with these file names:
- `nail-1.jpg`
- `nail-2.jpg`
- `nail-3.jpg`
- `nail-4.jpg`

Once those are in place, the gallery on the homepage will show them automatically.

## Notes
- The booking form uses `app/api/bookings/route.ts` to insert records into Supabase.

-- TechFest Database Setup Script
-- Run this script in Supabase SQL Editor to initialize the database

-- Create tables
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  max_participants integer NOT NULL DEFAULT 50,
  current_participants integer NOT NULL DEFAULT 0,
  image_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES events(id) ON DELETE CASCADE,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  college text NOT NULL,
  year text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for events (public read)
DROP POLICY IF EXISTS "Anyone can view events" ON events;
CREATE POLICY "Anyone can view events"
  ON events FOR SELECT
  USING (true);

-- Create policies for registrations (public insert and read)
DROP POLICY IF EXISTS "Anyone can register for events" ON registrations;
CREATE POLICY "Anyone can register for events"
  ON registrations FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can view registrations" ON registrations;
CREATE POLICY "Anyone can view registrations"
  ON registrations FOR SELECT
  USING (true);

-- Create policies for contact messages (public insert only)
DROP POLICY IF EXISTS "Anyone can send contact messages" ON contact_messages;
CREATE POLICY "Anyone can send contact messages"
  ON contact_messages FOR INSERT
  WITH CHECK (true);

-- Insert sample events
INSERT INTO events (title, description, category, date, location, max_participants, image_url)
SELECT * FROM (VALUES
  ('Hackathon 2024', 'Build innovative solutions in 24 hours. Team up with brilliant minds and create something amazing!', 'competition', '2024-11-15 09:00:00+00', 'Main Auditorium', 100, 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg'),
  ('AI & Machine Learning Workshop', 'Hands-on workshop covering neural networks, deep learning, and practical AI applications.', 'workshop', '2024-11-16 14:00:00+00', 'Lab Complex A', 50, 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'),
  ('Cyber Security Challenge', 'Test your security skills in this CTF-style competition. Crack codes, find vulnerabilities!', 'competition', '2024-11-17 10:00:00+00', 'Computer Center', 75, 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'),
  ('Web Development Bootcamp', 'Master modern web development with React, Node.js, and cloud deployment strategies.', 'workshop', '2024-11-18 11:00:00+00', 'Seminar Hall', 60, 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg'),
  ('Robotics Showcase', 'Witness cutting-edge robotics projects and demonstrations from top innovators.', 'showcase', '2024-11-19 15:00:00+00', 'Exhibition Ground', 200, 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg'),
  ('Blockchain & Crypto Talk', 'Expert insights into blockchain technology, cryptocurrency, and decentralized applications.', 'talk', '2024-11-20 16:00:00+00', 'Conference Room', 80, 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg')
) AS v(title, description, category, date, location, max_participants, image_url)
WHERE NOT EXISTS (
  SELECT 1 FROM events WHERE events.title = v.title
);

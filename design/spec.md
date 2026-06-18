# Website Specification

## Purpose

The website markets Rokk Lab as a modern Applecross hair salon and helps visitors understand the salon, browse services, contact the team, and book appointments.

## Primary Goals

- Present Rokk Lab as precise, modern, confident, and welcoming.
- Drive appointment bookings through prominent calls to action.
- Make services, pricing guidance, location, and contact details easy to find.
- Keep the site fast, static, responsive, and accessible.

## Expected Routes

- `/` introduces the brand with hero messaging, salon positioning, service highlights, and booking CTA.
- `/landing/` may mirror or test landing-page content while preserving the same brand direction.
- `/about/` explains the salon story, values, team approach, and client experience.
- `/services/` presents service categories, pricing guidance, consultation notes, and any interactive category navigation.
- `/contact/` provides the contact form, phone, email, social handle, address, and map.
- `/Privacy policy/` hosts privacy policy content until the route is normalized.
- `/404.html` provides a branded fallback for missing pages.

## Booking Behavior

Booking CTAs should link to the Client Diary booking URL already used in the site. Primary booking buttons should be easy to find in the hero and closing CTA areas. Do not replace the booking URL without confirming the new destination.

## Content Behavior

Services should stay grouped by category and use clear names and prices. Contact details should remain scannable and accurate. Forms may be static unless a backend or form service is explicitly added.

## Accessibility & Responsiveness

Every page must work on mobile and desktop. Images need meaningful `alt` text when they communicate content and empty `alt` text when decorative. Interactive controls must be keyboard usable, visibly focused, and avoid relying only on color.

## Build Requirements

The production site must build with `bun run build`. Do not add runtime dependencies, scripts, or integrations unless they are needed for a specific feature.

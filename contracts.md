# API Contracts - LVLUP University Trading Community

## Overview
This document outlines the API contracts for the trading community website, defining the data structures and endpoints needed for backend integration.

## Frontend Mock Data to Backend Integration

### 1. Contact Form Submission
**Mock Data**: Contact form with name, email, message fields
**Backend API**: `POST /api/contact`
**Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "message": "string",
  "timestamp": "datetime"
}
```
**Response**: Success/error status

### 2. Newsletter Subscription
**Mock Data**: Email input in SocialMedia component
**Backend API**: `POST /api/newsletter`
**Request Body**:
```json
{
  "email": "string",
  "timestamp": "datetime"
}
```
**Response**: Success/error status

### 3. Testimonials Management
**Mock Data**: testimonials array in mockData.js
**Backend API**: `GET /api/testimonials`
**Response**:
```json
[
  {
    "id": "string",
    "name": "string",
    "text": "string",
    "profit": "string",
    "image": "string",
    "created_at": "datetime"
  }
]
```

### 4. Profit Images Gallery
**Mock Data**: profitImages array in mockData.js
**Backend API**: `GET /api/profits`
**Response**:
```json
[
  {
    "id": "string",
    "image": "string",
    "description": "string",
    "profit": "string",
    "created_at": "datetime"
  }
]
```

### 5. Team Members
**Mock Data**: teamMembers array in mockData.js
**Backend API**: `GET /api/team`
**Response**:
```json
[
  {
    "id": "string",
    "name": "string",
    "role": "string",
    "image": "string",
    "bio": "string",
    "created_at": "datetime"
  }
]
```

### 6. Economic Events (Live Data)
**Mock Data**: economicEvents array in mockData.js
**Backend API**: `GET /api/economic-events`
**Response**:
```json
[
  {
    "id": "string",
    "time": "string",
    "currency": "string",
    "event": "string",
    "impact": "string",
    "actual": "string",
    "forecast": "string",
    "previous": "string",
    "date": "string"
  }
]
```

## Database Models

### ContactForm
- id: ObjectId
- name: String (required)
- email: String (required)
- message: String (required)
- timestamp: DateTime (default: now)
- status: String (default: "unread")

### Newsletter
- id: ObjectId
- email: String (required, unique)
- timestamp: DateTime (default: now)
- active: Boolean (default: true)

### Testimonial
- id: ObjectId
- name: String (required)
- text: String (required)
- profit: String
- image: String
- approved: Boolean (default: false)
- created_at: DateTime (default: now)

### ProfitImage
- id: ObjectId
- image: String (required)
- description: String
- profit: String
- approved: Boolean (default: false)
- created_at: DateTime (default: now)

### TeamMember
- id: ObjectId
- name: String (required)
- role: String (required)
- image: String
- bio: String
- order: Number (for sorting)
- active: Boolean (default: true)
- created_at: DateTime (default: now)

## Integration Plan

### Phase 1: Basic CRUD Operations
1. Implement contact form submission endpoint
2. Implement newsletter subscription endpoint
3. Create admin endpoints for managing testimonials and profit images

### Phase 2: Content Management
1. Implement team member management
2. Add file upload functionality for images
3. Create admin dashboard endpoints

### Phase 3: External Integrations
1. Forex Factory calendar integration (if API available)
2. Social media feed integration (optional)
3. Email notifications for contact form submissions

## Frontend Changes Required

### Remove Mock Data Usage
1. Replace mockData imports with API calls
2. Add loading states for all API requests
3. Add error handling for failed API calls
4. Implement proper state management for API data

### API Integration Points
- **Contact.jsx**: Replace mock form submission with POST /api/contact
- **SocialMedia.jsx**: Replace mock newsletter with POST /api/newsletter  
- **ProfitsReviews.jsx**: Replace mock data with GET /api/testimonials and GET /api/profits
- **Team.jsx**: Replace mock data with GET /api/team
- **EconomicReports.jsx**: Replace mock data with GET /api/economic-events

### Error Handling
- Add toast notifications for form submissions
- Add loading spinners for data fetching
- Add fallback UI for failed API calls
- Add retry mechanisms for critical data

## Security Considerations
- Input validation and sanitization
- Rate limiting for form submissions
- CORS configuration
- Basic spam protection for contact form
- Email validation for newsletter subscriptions

## Environment Variables
- FOREX_FACTORY_API_KEY (if available)
- EMAIL_SERVICE_API_KEY (for notifications)
- ADMIN_EMAIL (for contact form notifications)
import axios from 'axios';
import { BookingRequest, BookingResponse } from './types';

const API_URL = process.env.REACT_APP_API_URL || 'https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com/prod/bookings';

export const bookLane = async (bookingData: BookingRequest): Promise<BookingResponse> => {
  if (process.env.NODE_ENV === 'development') {
    const mockResponse: BookingResponse = {
      ...bookingData,
      price: bookingData.people * 120 + bookingData.lanes * 100,
      id: `mock_${Date.now()}`,
      active: true,
    };
    return mockResponse;
  }
  const response = await axios.post(API_URL, bookingData, {
    headers: {
      "x-api-key": "738c6b9d-24cf-47c3-b688-f4f4c5747662",
      "Content-Type": "text/plain",
    },
  });
  return response.data;
};
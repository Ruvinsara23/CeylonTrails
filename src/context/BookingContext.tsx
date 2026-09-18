'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface BookingData {
  packageId: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface BookingContextType {
  step: number;
  setStep: (step: number) => void;
  data: BookingData;
  updateData: (partial: Partial<BookingData>) => void;
  resetBooking: () => void;
}

const initialData: BookingData = {
  packageId: '',
  startDate: '',
  endDate: '',
  adults: 1,
  children: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  specialRequests: '',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingData>(initialData);

  const updateData = (partial: Partial<BookingData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const resetBooking = () => {
    setStep(1);
    setData(initialData);
  };

  return (
    <BookingContext.Provider value={{ step, setStep, data, updateData, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}

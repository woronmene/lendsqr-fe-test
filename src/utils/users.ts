import axios from "axios";

export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

// Function to get all users from an endpoint
export async function getAllUsers(): Promise<User[]> {
  const response = await axios.get(
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
  );
  return response.data;
}

// Function to get user details by ID from another endpoint
export async function getUserById(id: string): Promise<User> {
  const response = await axios.get(
    `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
  );
  return response.data;
}

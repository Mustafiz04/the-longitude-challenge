export interface User {
  id: string
  email: string
  username: string
  createdAt: Date
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials {
  email: string
  password: string
  username: string
} 
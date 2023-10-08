export interface UserModel {
  id: number;

  first_name: string;
  last_name: string;
  email: string;
  country?: string;
  city?: string;

  sex: string;
  birthday_date: Date;

  email_verified_at: Date;
  remember_token: string;

  linkedin?: string;
  phone?: string;
  telegram?: string;

  grade: string;
  position: string;

  work_type: string;
  work_time: string;
  hired_type: string;
  hired_date: Date;

  created_at: Date;
  updated_at: Date;
}

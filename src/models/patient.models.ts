import { Schema, model } from "mongoose";

const PatientsSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    status: { type: String, enum: ["BUSY", "AVAILABLE"] },
    kyc: [
      {
        certificates: [
          {
            url: { type: String, required: false, default: 'https://www.istockphoto.com/vector/certificate-template-diploma-of-modern-design-or-gift-certificate-gm1135148181-301883549'},
            title: { type: String, required: false },
            obtained_from: { type: String, required: false }
          }
        ],
        work_experience: [
          {
            institution_name: { type: String, required: false },
            institution_address: { type: String, required: false },
            speciality: { type: String, enum: [""]}
          }
        ] 
      }
    ]
  },
  { timestamps: true }
);


export const Patient = model("Patient", PatientsSchema);

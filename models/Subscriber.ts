import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISubscriber extends Document {
  name: string;
  email: string;
  unsubscribeToken: string;
  active: boolean;
  subscribedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    name: { type: String, default: "", trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    unsubscribeToken: { type: String, required: true, unique: true, index: true },
    active: { type: Boolean, default: true },
    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Subscriber: Model<ISubscriber> =
  mongoose.models.Subscriber ||
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);

export default Subscriber;

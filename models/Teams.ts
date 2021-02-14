import {
  model,
  Schema,
  Document
} from 'mongoose'

export interface ITeam extends Document {
  id: number
  name: string
  link: string
  abbreviation: string
  teamName: string
  locationName: string
}

const TeamSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true },
  abbreviation: { type: String, required: true },
  teamName: { type: String, required: true },
  locationName : { type: String, required: true }
});

export default model<ITeam>('Team', TeamSchema)
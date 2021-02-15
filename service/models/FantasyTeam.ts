import {
  model,
  Schema,
  Document
} from 'mongoose'

export interface IFantasyTeam extends Document {
  teamName: string
  previousYearRecord: string
  manager: string
  sacko: boolean
}

const FantasyTeamSchema: Schema = new Schema({
  teamName: { type: String, required: true },
  previousYearRecord: { type: String, required: true },
  manager: { type: String, required: true },
  sacko: { type: Boolean, required: true }
})

export default model<IFantasyTeam>('FantasyTeam', FantasyTeamSchema)
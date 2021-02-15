import {
  model,
  Schema,
  Document
} from 'mongoose'
import {
  ITeam
} from './Teams'
import {
  IFantasyTeam
} from './FantasyTeam'

export interface IPlayer extends Document {
  id: number
  fullName: string
  link: string
  team: ITeam['_id']
  jerseyNumber: string
  position: string
  positionType: string
  round: number
  roundPick: number
  overallPick: number
  fantasyTeam: IFantasyTeam['_id']
}

const PlayerSchema: Schema = new Schema({
  id: { type: Number, required: true },
  fullName: { type: String, required: true },
  link: { type: String, required: true },
  team: { type: Schema.Types.ObjectId, required: true },
  jerseyNumber: { type: String, required: true },
  position: { type: String, required: true },
  positionType: { type: String, required: true },
  round: { type: Number, required: false },
  roundPick: { type: Number, required: false },
  overallPick: { type: Number, required: false },
  fantasyTeam: { type: Schema.Types.ObjectId, required: false }
})

export default model<IPlayer>('Player', PlayerSchema)
import mongoose from 'mongoose'

const touristAttractionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    area: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updated: 'Updated_at' },
  }
)

const TouristAttraction = mongoose.model(
  'TouristAttraction',
  touristAttractionSchema
)

export default TouristAttraction

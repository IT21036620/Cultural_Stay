import mongoose from 'mongoose'

const AccommodationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, 'must provide accommodation name'],
      trim: true,
    },
    address: {
      type: String,
      required: [false, 'must provide accommodation location'],
      trim: true,
    },
    area: {
      type: String,
      required: [false, 'must provide accommodation location'],
      trim: true,
    },
    // location_maplink: {
    //   type: String,
    //   required: [false, 'must provide accommodation location link'],
    //   trim: true,
    // },
    availability: {
      type: String,
      default: 'Available',
    },
    availability_from: {
      type: Date,
      default: Date.now(),
    },
    availability_to: {
      type: Date,
    },
    no_of_guests_welcome: {
      type: Number,
      required: [false, 'must provide no of guests welcome'],
      default: 1,
      min: [1, 'Welcome at least 1 guests'],
    },
    no_of_bedrooms: {
      type: Number,
      required: false,
      default: 1,
    },
    no_of_beds: {
      type: Number,
      required: false,
      default: 1,
    },
    no_of_washrooms: {
      type: Number,
      required: false,
      default: 1,
    },
    price_per_night: {
      type: Number,
      required: [false, 'must provide Accommodation price'],
      min: [0, 'product price should be more than 0'],
      default: 2500,
    },
    welcome_type: {
      type: String,
      required: false,

      // enum: {
      //   values: ['Couple', 'Family', 'Solo', 'Student'],
      //   message: '{VALUE} is not a valid Type',
      // },
    },
    description: {
      type: String,
      required: [false, 'must provide accommodation description'],
    },
    facilities: {
      type: String,
      required: [false, 'must provide accommodation facilities'],
    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Host',
      required: [false, 'Please provide Host'],
    },
    images: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
)

const Accommodation = mongoose.model('Accommodation', AccommodationSchema)
// module.exports = mongoose.model('Accommodation', AccommodationSchema)
export default Accommodation

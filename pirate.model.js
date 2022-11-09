const mongoose = require ("mongoose")

const PirateSchema = {
name: {
        type: String,
        required: [true, "Pirate name is required."],
        minLength: [3, "Pirate name must be at least 3 characters."]
},
image: {
    type: String,
    required: [true, "Image URL is required."],
    minLength: [3, "Image URL must be at least 3 characters."]
},
chest: {
    type: String,
    required: [true, "Number of treasure chests is required."]
},
position: {
    type: String,
    required: [true, "Pirate crew position is required."],
    minLength: [3, "Pirate crew position must be at least 3 characters."]
},
phrase: {
    type: String,
    required: [true, "Pirate catch phrase is required."],
    minLength: [3, "Pirate catch phrase must be at least 3 characters."]
},
qualitiesOne: {
    type: String,
    required: [true, "Pirate must have 3 qualities"]
},
qualitiesTwo: {
    type: String,
    required: [true, "Pirate must have 3 qualities"]
},
qualitiesThree: {
    type: String,
    required: [true, "Pirate must have 3 qualities"]
},
};

module.exports = mongoose.model("Pirate", PirateSchema)
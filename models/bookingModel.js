// Each worker has 15 slots per day
// Not two slots should be less than 30 minutes apart
// Bookings should be made 3 hours in advance

// Clients should only be able to book slots that are 3 hours in advance
// Clients should not be able to book the same worker more than once a day

const { Schema, model } = require('mongoose')

const bookingSchema = new Schema({
    worker: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        // start time of the slot
        type: Date,
        default: Date.now
    },
    endTime: {
        // end time of the slot
        type: Date,
        default: null

    },
    skills: {
        type: Array,
        required: true
    },
    commitmentFee: {
        type: Number,
        default: 50
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    cancelled: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
})



const workerSlotSchema = new Schema({

    worker: { type: String, required: true },
    slots: [{
        date: { type: Date, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        completed: { type: Boolean, default: false }
    }]
});

workerSlotSchema.methods.checkSlotAvailability = function (startTime, endTime) {
    // Check if the slot is not less than 30 minutes apart from existing slots
    for (let i = 0; i < this.slots.length; i++) {
        if (startTime <= this.slots[i].endTime && endTime >= this.slots[i].startTime) {
            return false;
        }
    }
    return true;
};

workerSlotSchema.methods.bookSlot = function (date, startTime, endTime, worker, client, skills, name) {
    // Check if the slot is 3 hours in advance
    const threeHoursInAdvance = new Date(Date.now() + 1000 * 60 * 60 * 3);
    if (startTime < threeHoursInAdvance) {
        return 'Booking must be made 3 hours in advance';
    }

    // Check if the worker already has 15 slots for the day
    let slotsCount = 0;


    for (let i = 0; i < this.slots.length; i++) {
        if (date.toDateString() === this.slots[i].date.toDateString()) {
            slotsCount++;
        }
    }
    if (slotsCount >= 15) {
        return 'Worker has reached the maximum number of slots for the day';
    }

    // Check if the slot is available
    if (!this.checkSlotAvailability(startTime, endTime)) {
        return 'Slot is not available';
    }

    // Book the slot
    this.slots.push({ date, startTime, endTime });
    this.save();
    // save the booking to the database
    bookingModel({
        worker,
        client,
        date,
        skills,
        name,

    }).save()
    return 'Slot and booking successfully booked';
};

const workerSlot = model('Worker Slot', workerSlotSchema);

module.exports.workerSlotModel = workerSlot;
module.exports.bookingModel = model('Booking Model', bookingSchema);
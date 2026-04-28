import mongooes from 'mongoose';

const messageSchema = new mongooes.Schema(
  {
    senderId: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiverId: {
      type: mongooes.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Message = mongooes.model('Message', messageSchema);

export default Message;
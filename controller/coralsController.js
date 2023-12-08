import Corals from '../model/coralsModel.js'
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const coralsController = {
  getCorals: async (req, res) => {
    try {
      const corals = await Corals.find();
      res.status(200).json(corals);
    } catch (error) {
      console.error('Error fetching corals:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createCorals: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { name, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!name || !price) {
          return res.status(400).json({ error: 'Corals name and price are required' });
        }

        const corals = new Corals({ name, price, image });
        const savedcorals = await corals.save();

        res.status(201).json(savedcorals);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  ],
};
  export default coralsController;
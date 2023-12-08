import Pearls from '../model/pearlsModel.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const pearlsController = {
  getAllPearls: async (req, res) => {
    try {
      const pearls = await Pearls.find();
      res.status(200).json(pearls);
    } catch (error) {
      console.error('Error fetching pearls:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createPearls: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { name, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!name || !price) {
          return res.status(400).json({ error: 'Pearls name and price are required' });
        }

        const pearls = new Pearls({ name, price, image });
        const savedPearls = await pearls.save();

        res.status(201).json(savedPearls);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  ],
};

export default pearlsController;

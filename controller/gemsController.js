import Gems from "../model/gemsModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const gemsController = {
  getAllGems: async (req, res) => {
    try {
      const gems = await Gems.find();
      res.status(200).json(gems);
    } catch (error) {
      console.error('Error fetching gems:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createGem: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { name, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!name || !price) {
          return res.status(400).json({ error: 'gems name and price are required' });
        }

        const gems = new Gems({ name, price, image });
        const savedGems = await gems.save();

        res.status(201).json(savedGems);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  ],
}
export default gemsController;
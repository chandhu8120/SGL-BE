import Beads from "../model/beadsModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const beadsController = {
  getBeads: async (req, res) => {
    try {
      const beads = await Beads.find();
      res.status(200).json(beads);
    } catch (error) {
      console.error('Error fetching beads:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createBeads: [
    upload.single('image'),
    async (req, res) => {
      try {
        const { name, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!name || !price) {
          return res.status(400).json({ error: 'beads name and price are required' });
        }

        const beads = new Beads({ name, price, image });
        const savedBeads = await beads.save();

        res.status(201).json(savedBeads);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  ],
}
export default beadsController;
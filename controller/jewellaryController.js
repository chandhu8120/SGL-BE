import Jewellary from "../model/jewellaryModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const jewellaryController = {
  getAllJewellary: async (req, res) => {
    try {
      const jewellary = await Jewellary.find();
      res.status(200).json(jewellary);
    } catch (error) {
      console.error('Error fetching jewellary:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createJewellary: [
    upload.single('image'), 
    async (req, res) => {
      try {
        const { name, price } = req.body;

        if (!req.file) {
          return res.status(400).json({ error: 'Image file is required' });
        }

        const image = req.file.buffer.toString('base64');

        if (!name || !price) {
          return res.status(400).json({ error: 'Jewellary name and price are required' });
        }

        const newJewellary = new Jewellary({ name, price, image });
        const savedJewellary = await newJewellary.save();

        res.status(201).json(savedJewellary);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  ],
};

export default jewellaryController;

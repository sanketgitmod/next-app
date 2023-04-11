import Foods from "../../models/food";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const food = new Foods(data);
    try {
      const result = await food.save();
      res.status(201).json(result);
    } catch (ex) {
      console.log(ex.message);
    }
  }
}

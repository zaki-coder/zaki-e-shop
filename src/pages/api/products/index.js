import Porduct from "../../../../models/Product";
import db from "../../../../utils/db"

export default async function handler(req, res) {
  await db.connect();

  switch (req.method) {
    case "GET": {
      if (req.query.featured) {
        const featuredProducts = await Porduct.find({ featured: true });
        return res.status(200).json(featuredProducts);
      } else if (req.query.cat) {
        const catProducts = await Porduct.find({ category: req.query.cat });
        return res.status(200).json(catProducts);
      } else {
        const product = await Porduct.find({});
        return res.status(200).json(product);
      }
    }
    case "POST": {
      const product = await Porduct.create({ ...req.body });
      return res.status(201).json(product);
    }
  }
}
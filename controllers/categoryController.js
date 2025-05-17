const categoryModel = require("../models/categoryModel");

// ==============================================================
// ============ Add New Category Api Controller =================
// ==============================================================
const addCategories = async (req, res) => {
  const { name, image, description } = req.body;
  const newCategory = new categoryModel({ name, image, description });
  await newCategory
    .save()
    .then((category) => {
      res.status(200).json({ category });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

// ==============================================================
// ============ get Category [ All / id ] Api Controller ========
// ==============================================================
const getcategories = async (req, res) => {
    const {id} = req.params;
    try {
        if(id){
            const category = await categoryModel.findById(id);
            if(!category){
                return res.status(404).json({message:"Category not found"});
            }
            return res.status(200).json({category});
        }
        else{
            const categories = await categoryModel.find();
            if(!categories){
                return res.status(404).json({message:"Categories not found"});
            }
            return res.status(200).json({categories});
        }
    } catch (error) {
        console.error("Error getting categories:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
  const AllCategories = await categoryModel.find();
  res.status(200).json({ AllCategories });
};
// ==============================================================
// ============ delete Category [ All / id ] Api Controller ======
// ==============================================================
const deleteCategories = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const deletedCategory = await categoryModel.findByIdAndDelete(id);

      if (!deletedCategory) {
        return res.status(404).json({ message: "Category not found" });
      }

      return res.status(200).json({
        message: "Category deleted successfully",
        deletedCategory,
      });
    } else {
      const result = await categoryModel.deleteMany();

      return res.status(200).json({
        message: "All categories deleted successfully",
        deletedCount: result.deletedCount,
      });
    }
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

// ==============================================================
// ============ Updte Category [id ] Api Controller ==============
// ==============================================================
const updateCategory = async (req, res) => {
    const {id} = req.params;
    const {name , image , description}= req.body;
    if(id){
        const category = await categoryModel.findById(id);
        if(!category){
            return res.status(404).json({message:"Category not found"});
        }
        category.name = name;
        category.image = image;
        category.description = description;
        await category.save();
        return res.status(200).json({category});
    }
}


// ==============================================================
// ============ Exports All Category Api Controller ==============
// ==============================================================
module.exports = {
  addCategories,
  getcategories,
  deleteCategories,
  updateCategory
};

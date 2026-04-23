const Company = require("../model/Company");
const mongoose = require("mongoose");

exports.addCompany = async (req, res) => {
  const {
    companyName,
    email,
    industry,
    logo,
    phone,
    website,
    location,
    description,
    companySize,
    createdBy
  } = req.body;

  try {
    const exists = await Company.findOne({ email });
    if (!exists) {
      const comDetail = await Company.create({
        companyName,
        email,
        industry,
        logo,
        phone,
        website,
        location,
        description,
        companySize,
        createdBy
      });
      return res.status(201).json({ msg: "Successfully updated", comDetail });
    }
    return res.status(400).json({ msg: "Company details already " });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteCom = async (req, res) => {
  try {
    const exists = await Company.findByIdAndDelete(req.params.id);
    if (!exists) {
      return res.status(404).json({ msg: "Give valid data" });
    }

    return res.status(200).json({ msg: "successfully Deleted", deleted: true });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getDetail = async (req, res) => {
  const id=req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: "Invalid company ID" });
    }

    const company = await Company.findOne({createdBy:id});

    if (!company) {
      return res.status(404).json({ msg: "Company not found" });
    }

    return res.status(200).json({ company });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.updateDetail = async (req, res) => {
  

  try {
     
      const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body);
      if(!updatedCompany){
        return res.status(404).json({ msg: "data not found" });
        
      }
      return res.status(200).json({ msg: "updated " });
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getCompanies=async(req,res)=>{

  try {
    const companies = await Company.find();
    if(companies.length==0){
      return res.status(400).json({msg:"Companies not found"})
    }
    return res.status(200).json({companies})

  } catch (error) {
    

    return res.status(500).json({msg:error.message})

  }

}
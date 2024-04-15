const CustomError = require("../libs/error");
const { authService } = require("../services");

exports.signUp = async (req, res) => {
  try {
    const response = await authService.signUp({ body: req.body });
    if (!response) throw new CustomError("User not created", 400);
    return res.status(201).json({ message: "success" });
  } catch (e) {
    //console.log('e: ', e.message);
    return res.status(e?.code || 500).json({ message: e?.message });
  }
};

exports.login = async (req, res) => {
    try {
        const response = await authService.login({ body: req.body })
        if (!response)
            throw new CustomError("Token not created", 400)
        return res.status(201).json(response)
    }
    catch (e) {
        //console.log('e: ', e.message);
        return res.status(e?.code || 500).json({ message: e?.message })
    }
}
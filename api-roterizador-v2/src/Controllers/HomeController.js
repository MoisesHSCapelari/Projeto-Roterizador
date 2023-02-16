class HomeController {
  async index(req, res) {
    res.json({
      index: true,
    });
  }
}

export default new HomeController();

import Trip from '../Models/Trip';

class TripsController {
  async store(req, res) {
    try {
      const tripNew = await Trip.create({ ...req.body });
      return res.json({ tripNew });
    } catch (e) {
      console.log(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  // index
  async index(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query;

      const trips = await Trip.findAll({
        offset: (page - 1) * limit,
        limit: Number(limit),
        order: [['createdAt', 'DESC']],
      });

      return res.status(200).json(trips);
    } catch (e) {
      console.error(e);
      return res.status(400).json('Acesso não Autorizado!');
    }
  }

  // show
  async show(req, res) {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({
          errors: ['ID não informado'],
        });
      }
      const trip = await Trip.findByPk(id);
      return res.status(200).json(trip);
    } catch (e) {
      return res.status(400).json({
        errors: ['Acesso não Autorizado!'],
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const trip = await Trip.findByPk(id);

      if (!trip) {
        return res.status(400).json({
          errors: ['Rota não existe.'],
        });
      }

      const tripUpdated = await trip.update(req.body);

      return res.json(tripUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const trip = await Trip.findByPk(id);

      if (!trip) {
        return res.status(400).json({
          errors: ['rota não existe.'],
        });
      }

      await trip.destroy();
      return res.json('Rota apagada com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: [' Rota nao encontrada'],
      });
    }
  }
}

export default new TripsController();

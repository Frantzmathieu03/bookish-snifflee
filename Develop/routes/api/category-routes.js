router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json(err));
});

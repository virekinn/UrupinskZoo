const isSession = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/')
  } else {
    next()
  }
}

const isNotSession = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/')
  } else {
    next()
  }
}

module.exports = { isSession, isNotSession }

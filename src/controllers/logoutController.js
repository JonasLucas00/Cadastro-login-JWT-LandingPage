module.exports.logout = function (req, res) {

    res.clearCookie('token', {
        httpOnly: true,
        secure: true,     // use true em produção (https)
        sameSite: 'strict',
        path: '/'         // mesmo path/domain usado ao criar
    });

    return res.json({ message: 'Deslogado com sucesso' });
}
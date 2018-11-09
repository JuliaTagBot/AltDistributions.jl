var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "AltDistributions",
    "title": "AltDistributions",
    "category": "page",
    "text": ""
},

{
    "location": "#AltDistributions.AltMvNormal",
    "page": "AltDistributions",
    "title": "AltDistributions.AltMvNormal",
    "category": "type",
    "text": "AltMvNormal(?, μ, L)\n\n\nInner constructor used internally, for specifying L directly when the first argument is Val{:L}.\n\nYou don\'t want to use this, use a Cholesky factorization instead.\n\n\n\n\n\nAltMvNormal(μ, Σ)\n\n\nMultivariate normal distribution with mean μ and covariance matrix Σ, which can be an abstract matrix (eg a factorization) or I. If Σ is not symetric because of numerical error, wrap in LinearAlgebra.Symmetric.\n\nUse the AltMvNormal(Val(:L), μ, L) constructor for using LL\'=Σ directly.\n\n\n\n\n\n"
},

{
    "location": "#AltDistributions.LKJL",
    "page": "AltDistributions",
    "title": "AltDistributions.LKJL",
    "category": "type",
    "text": "LKJL(η)\n\n\nThe LKJ distribution (Lewandowski et al 2009) for the Cholesky factor L of correlation matrices.\n\nA correlation matrix Ω=LL has the density Ω^(η-1). However, it is usually not necessary to construct Ω, so this function is parametrized in terms of a Cholesky decomposition L*L\', and takes L directly.\n\nNote that this function does not check if L yields a valid correlation matrix.\n\nValid values are η  0. When η  1, the distribution is unimodal at the identity, while 0  η  1 has a trough. η = 2 is recommended as a vague prior.\n\nWhen η = 1, the density is uniform. Note however that the function should still be invoked, because of the Jacobian correction of the transformation.\n\n\n\n\n\n"
},

{
    "location": "#AltDistributions-1",
    "page": "AltDistributions",
    "title": "AltDistributions",
    "category": "section",
    "text": "AltMvNormal\nLKJL"
},

]}

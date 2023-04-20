### Software

On this page, you’ll find some of the open-source software that I've developed.
This is not a complete list, so check back soon for more.

#### bayesplay R package

Bayesplay is an R package for computing Bayes factors for simple models (for
example, differences in means). Models are constructed by specifying the
relevant likelihood and priors. These can then combined to compute a
Bayes factor.

It's possible to specify the following likelihoods:

- Normal

- Scaled and shifted *t*-distribution

- Binomial

- and several non-central *t*-distributions for making inferences about *t*-
statistics, one-sample Cohen’s *d*, and independent samples Cohen’s *d*.

The following priors can be used:

- Normal distribution

- Uniform distribution

- Scaled and shifted *t* distribution

- Cauchy distributions

- And the Beta distribution

bayesplay can be installed directly from CRAN as follows:

```r
install.packages("bayesplay")
```

The documentation is available at [bayesplay.github.io/bayesplay/](https://bayesplay.github.io/bayesplay/)

Note that it's also possible to use *bayesplay* from inside
[JASP](https://jasp-stats.org/). It is available under the menu for **General
Bayesian Tests**.

#### bayesplay web app

The Bayesplay web app is a web-based interface for the Bayesplay package. It
allows users to construct models and compute Bayes factors without having to
install any software. It is possible to use the web app as a standalone tool,
but it is also possible to use the web-app to generate R code for the Bayesplay
R pacakge.

The web app is available at
[bayesplay.colling.net.nz](https://bayesplay.colling.net.nz).



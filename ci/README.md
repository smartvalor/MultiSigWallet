# Deploy concourse CI pipeline

## Dev CI

```bash
fly -t dev-ci set-pipeline \
-p multisigwallet \
-c ci/pipeline-dev.yaml \
-l <(cd ../sv-k8s-infrastructure && blackbox_cat ci/values/dev-cloud.yaml.gpg)
```

## Prod CI

```bash
fly -t prod-ci set-pipeline -p blockchain \
-p multisigwallet \
-c ci/pipeline-prod.yaml \
-l <(cd ../sv-k8s-infrastructure && blackbox_cat ci/values/prod-cloud.yaml.gpg)
```

# Deploy app (reference only)

```bash
helm upgrade uat-multisigwallet --install \
--namespace default \
--values ci/values/uat/charts/values.yaml --values <(blackbox_cat ci/values/uat/charts/values-secrets.yaml.gpg) \
--set-string image.tag=latest \
charts/multisigwallet
```

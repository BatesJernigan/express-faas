# OpenFaas node10-express project

## Steps to reproduce error
```bash
# terminal 1
faas-cli up

# terminal 2
kubectl -n openfaas-fn logs express-faas-<POD-SHA>
# OR
`stern -n openfaas-fn express-faas`

# terminal 1, invoke function and watch logs for error
echo -n '' | faas-cli invoke express-faas
```
Expected: Request to go through and get some non-error response
Actual: Getting errors from logs complaining about the upstream_url even 
though the url that's being requested does not match


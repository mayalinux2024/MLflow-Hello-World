import mlflow

mlflow.set_experiment("demo-experiment")

with mlflow.start_run():
    mlflow.log_param("model", "demo")
    mlflow.log_metric("accuracy", 0.91)
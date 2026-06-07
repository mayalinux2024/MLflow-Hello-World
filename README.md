# Experiment Tracking with MLflow (Hello World)

## Goal
The goal of this project is to learn the basics of **MLflow experiment tracking** before moving to OpenShift AI and MLOps workflows.

We log parameters and metrics and visualize them using the MLflow tracking UI.

---

## Tools & Technologies
- Python
- MLflow
- scikit-learn
- Virtual Environment (venv)

---

## MLflow Experiment Tracking Results

After running the training script, MLflow automatically logs the experiment run into the tracking UI.

### Logged Information

Each run contains:

- **Parameter**
  - `model = demo`

- **Metric**
  - `accuracy = 0.91`

These values are visible in the MLflow Tracking UI under the experiment.

---

## 🖥️ MLflow UI Screenshot

The screenshot below shows the MLflow experiment run with logged parameters and metrics.

![MLflow Run Screenshot](mlflow-demo-run.png)

---

## 📍 How to View the Results

1. Start MLflow UI:

    mlflow ui

2. Open in browser:

    http://127.0.0.1:5000

3. Navigate to:

    Experiment → demo-experiment

    Click Runs

    Open the latest run
// App
const Prometheus = require("prom-client");

const register = new Prometheus.Registry();

// Probe every 5th second.
const collectDefaultMetrics = Prometheus.collectDefaultMetrics;
collectDefaultMetrics({ register: register });

const metricsReadTotal = new Prometheus.Counter({
	name: "app_metrics_read_total",
	help: "Total number of metric readings",
	registers: [register],
});

const restResponseTimeHistogram = new Prometheus.Histogram({
	name: "rest_api_response_time_durations_seconds",
	help: "REST API response time in seconds",
	labelNames: ["method", "route", "status_code"],
	registers: [register],
});

const databaseResponseTimeHistogram = new Prometheus.Histogram({
	name: "db_response_time_duration_seconds",
	help: "Database response time in seconds",
	labelNames: ["operation", "success"],
	registers: [register],
});

module.exports = {
	register,
	metricsReadTotal,
	restResponseTimeHistogram,
	databaseResponseTimeHistogram,
};

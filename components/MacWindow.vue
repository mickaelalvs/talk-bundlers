<script setup>
defineProps({
	title: { type: String, default: "" },
})
</script>

<template>
	<div class="mac-window">
		<div class="mac-titlebar">
			<div class="mac-controls">
				<div class="mac-control close"></div>
				<div class="mac-control minimize"></div>
				<div class="mac-control maximize"></div>
			</div>
			<div class="mac-title">{{ title }}</div>
		</div>
		<div class="mac-body">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.mac-window {
	background: #ffffff;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid #d1d5db;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	width: fit-content;
	min-width: 400px;
	max-width: 100%;
	height: 100%;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	color: #1f2937;
}
.mac-titlebar {
	height: 28px;
	flex-shrink: 0;
	background: linear-gradient(to bottom, #faf9f5, #ececec);
	border-bottom: 1px solid #d1d5db;
	display: flex;
	align-items: center;
	padding: 0 12px;
	position: relative;
}
.mac-controls {
	display: flex;
	gap: 8px;
	position: absolute;
	left: 12px;
}
.mac-control {
	width: 10px;
	height: 10px;
	border-radius: 50%;
}
.mac-control.close {
	background: #ff5f57;
}
.mac-control.minimize {
	background: #ffbd2e;
}
.mac-control.maximize {
	background: #28ca42;
}
.mac-title {
	flex: 1;
	text-align: center;
	font-size: 11px;
	font-weight: 500;
	color: #4b5563;
	font-family: ui-monospace, "SF Mono", "JetBrains Mono", monospace;
}
.mac-body {
	padding: 0.85rem 1.1rem;
	line-height: 1.55;
	flex: 1;
	min-height: 0;
	max-height: 24rem;
	overflow: auto;
	background: #ffffff;
}
/* Taille de police uniforme pour TOUS les blocs de code, partout */
.mac-body :deep(.slidev-code) {
	font-size: 0.8rem;
	line-height: 1.5;
}
.mac-body :deep(.slidev-code-wrapper) {
	border: none !important;
	border-radius: 0 !important;
	margin: 0 !important;
}
.mac-body :deep(.slidev-code-wrapper + .slidev-code-wrapper) {
	margin-top: 0.1rem !important;
}
.mac-body :deep(pre) {
	margin: 0 !important;
	padding: 0 !important;
	background: transparent !important;
}
.mac-body :deep(code) {
	font-family: ui-monospace, "SF Mono", "JetBrains Mono", monospace;
}
</style>

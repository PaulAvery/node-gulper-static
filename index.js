module.exports = {
	css: function(glob, base) {
		return {
			name: 'static',
			output: 'styles',
			glob: glob,
			base: base,
			streamer: function(input) {
				return input;
			}
		};
	},
	js: function(glob, base) {
		return {
			name: 'static',
			output: 'scripts',
			glob: glob,
			base: base,
			streamer: function(input) {
				return input;
			}
		};
	},
	assets: function(glob, base) {
		return {
			name: 'static',
			output: 'assets',
			glob: glob,
			base: base,
			streamer: function(input) {
				return input;
			}
		};
	}
};
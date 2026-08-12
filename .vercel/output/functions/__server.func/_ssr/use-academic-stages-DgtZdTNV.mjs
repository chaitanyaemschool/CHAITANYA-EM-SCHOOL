import { l as ACADEMIC_STAGES, o as useContent } from "./router-SErTpL7i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-academic-stages-DgtZdTNV.js
/**
* Layers the Admin Studio "Home page → Academic stages" edits (text + images)
* on top of the built-in stage data, so the homepage cards, the /academics
* listing and each /academics/$stage detail page all show the same, latest
* content the administrator saved.
*/
function useAcademicStages() {
	const cms = useContent("home_academics");
	const rows = Array.isArray(cms.stages) ? cms.stages : [];
	if (!rows.length) return ACADEMIC_STAGES;
	return rows.map((r, i) => {
		const base = ACADEMIC_STAGES.find((s) => s.slug === (r.slug ?? "").trim()) ?? ACADEMIC_STAGES[i] ?? ACADEMIC_STAGES[ACADEMIC_STAGES.length - 1];
		const image = (r.image ?? "").trim();
		return {
			...base,
			grades: (r.ages ?? "").trim() || base.grades,
			line: (r.tagline ?? "").trim() || base.line,
			preview: {
				...base.preview,
				title: (r.title ?? "").trim() || base.preview.title,
				description: (r.body ?? "").trim() || base.preview.description,
				image: image || base.preview.image
			},
			detail: {
				...base.detail,
				heroImage: image || base.detail.heroImage
			}
		};
	});
}
/** Same merge, resolved for a single stage slug. */
function useAcademicStage(slug) {
	return useAcademicStages().find((s) => s.slug === slug);
}
//#endregion
export { useAcademicStages as n, useAcademicStage as t };

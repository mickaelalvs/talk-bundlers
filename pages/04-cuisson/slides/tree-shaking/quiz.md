---
layout: basic
---

<div class="quiz-wrap">
  <div class="quiz-badge">🎯 Petit quiz</div>

  <div class="quiz-question">
    Tu as <code>lodash</code> dans ton <code>package.json</code>,<br />
    mais tu ne l'importes <strong>nulle part</strong> dans ton code.
  </div>

  <div class="quiz-ask">
    Est-il dans ton bundle final ?
  </div>

  <div class="quiz-options">
    <div class="quiz-option">
      <span class="quiz-option-letter">A</span>
      <span>Oui, il est installé donc il est embarqué</span>
    </div>
    <div class="quiz-option">
      <span class="quiz-option-letter">B</span>
      <span>Non, le bundler ne le voit pas</span>
    </div>
  </div>

  <div v-click="1" class="quiz-answer">
    <div class="quiz-answer-tag">✓ Réponse : B</div>
    <div class="quiz-answer-text">
      Le bundler regarde tes <strong>imports</strong>, pas ton <code>package.json</code>.<br />
      Sans import, pas de chemin dans le graphe, pas dans le bundle.
    </div>
  </div>
</div>

<style>
.quiz-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
  padding: 0 2rem;
}
.quiz-badge {
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  background: var(--theme-color-amber);
  padding: 0.35rem 1.1rem;
  border-radius: 999px;
}
.quiz-question {
  font-family: "Nunito", sans-serif;
  font-size: 1.35rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  line-height: 1.5;
  max-width: 700px;
}
.quiz-question code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  font-size: 0.9em;
}
.quiz-question strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.quiz-ask {
  font-family: "Paytone One", sans-serif;
  font-size: 1.55rem;
  color: var(--theme-color-steel);
  text-align: center;
}
.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  max-width: 600px;
}
.quiz-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.25rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  border: 2px solid rgba(159, 169, 185, 0.3);
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  text-align: left;
}
.quiz-option-letter {
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
  width: 1.5rem;
  text-align: center;
}
.quiz-answer {
  margin-top: 0.4rem;
  padding: 0.9rem 1.5rem;
  background: rgba(76, 175, 80, 0.12);
  border-left: 4px solid #4caf50;
  border-radius: 8px;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.quiz-answer-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  color: #2e7d32;
  text-transform: uppercase;
}
.quiz-answer-text {
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
}
.quiz-answer-text code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  font-size: 0.9em;
}
.quiz-answer-text strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
Pause interactive après l'explication du mécanisme. Question + 2 options
visibles d'entrée. Pause de 5-10 secondes pour laisser l'audience deviner.
Demander "alors, A ou B ?" à voix haute.

[click] Reveal de la réponse B + explication courte. Le point clé : le
bundler regarde les imports, pas le package.json. C'est juste un manifest
d'installation, pas un manifest de bundle.

Idem pour les libs : tu importes 1 fonction, tu n'as que cette fonction
dans le bundle (si la lib est bien faite).
-->

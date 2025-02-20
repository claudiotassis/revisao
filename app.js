import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const EnglishTest = () => {
  const questions = [
    {
      id: 1,
      question: 'Complete a frase: "I _____ a computer in my bedroom."',
      options: ['has', 'have', 'having', 'haves', 'had'],
      correctAnswer: 1,
      explanation: 'We use "have" with I/you/we/they in the present simple.'
    },
    {
      id: 2,
      question: 'Qual a forma correta do verbo para a terceira pessoa do singular em: "She _____ oranges."',
      options: ['like', 'likes', 'liking', 'to like', 'liked'],
      correctAnswer: 1,
      explanation: 'In third person singular (he/she/it), we add -s to the verb in present simple.'
    },
    {
      id: 3,
      question: 'Como se escreve o número ordinal "22nd" por extenso?',
      options: ['twenty second', 'twenty-second', 'twenty and second', 'twenty secondth', 'twenty-two'],
      correctAnswer: 1,
      explanation: 'Ordinal numbers with hyphens are written like "twenty-second".'
    },
    {
      id: 4,
      question: 'Complete com o pronome objeto correto: "Can you help ___?"',
      options: ['I', 'me', 'my', 'mine', 'we'],
      correctAnswer: 1,
      explanation: 'After verbs, we use object pronouns (me, you, him, her, it, us, them).'
    },
    {
      id: 5,
      question: 'Qual a resposta adequada para "What\'s your favorite food?"',
      options: ['Yes, I do', 'No, I don\'t', 'I like pizza', 'It\'s three o\'clock', 'On Monday'],
      correctAnswer: 2,
      explanation: 'When asked about preferences, respond with "I like..." followed by your choice.'
    },
    {
      id: 6,
      question: 'Como se diz "10:30" em inglês?',
      options: ['Ten and thirty', 'It\'s half past ten', 'It\'s thirty to ten', 'Ten o\'clock and half', 'Half to eleven'],
      correctAnswer: 1,
      explanation: 'For 30 minutes past the hour, we say "half past" followed by the hour.'
    },
    {
      id: 7,
      question: 'Choose the correct negative form: "I _____ a dog."',
      options: ['don\'t has', 'doesn\'t have', 'don\'t have', 'no have', 'not have'],
      correctAnswer: 2,
      explanation: 'For I/you/we/they in negative, we use "don\'t have".'
    },
    {
      id: 8,
      question: 'Complete the sentence: "_____ books are in your bag?"',
      options: ['What', 'Where', 'When', 'Whose', 'Who'],
      correctAnswer: 3,
      explanation: '"Whose" is used to ask about possession - "Whose books?" means "Who owns these books?"'
    },
    {
      id: 9,
      question: 'Qual é a nacionalidade correta para alguém do Brasil?',
      options: ['Brazilish', 'Brazilan', 'Brazilian', 'Brazilien', 'Brazilese'],
      correctAnswer: 2,
      explanation: 'The correct nationality for someone from Brazil is "Brazilian".'
    },
    {
      id: 10,
      question: 'Complete with the correct form: "They _____ students."',
      options: ['is', 'am', 'are', 'be', 'being'],
      correctAnswer: 2,
      explanation: 'With "they", we always use "are" in the present simple.'
    },
    {
      id: 11,
      question: 'What time means "7:45"?',
      options: ['It\'s quarter to eight', 'It\'s quarter past seven', 'It\'s forty-five past seven', 'It\'s seven and forty-five', 'It\'s eight minus fifteen'],
      correctAnswer: 0,
      explanation: 'When it\'s 15 minutes before the next hour, we say "quarter to" the next hour.'
    },
    {
      id: 12,
      question: 'Choose the correct question: "_____ spell that word?"',
      options: ['What you', 'How do you', 'Where you', 'When you', 'Who you'],
      correctAnswer: 1,
      explanation: 'Questions in present simple need auxiliary "do/does" - "How do you" is correct.'
    },
    {
      id: 13,
      question: 'Complete: "I would like _____ orange juice."',
      options: ['an', 'a', 'the', 'one', 'any'],
      correctAnswer: 0,
      explanation: 'We use "an" before words that begin with vowel sounds.'
    },
    {
      id: 14,
      question: 'What\'s the correct possessive form?',
      options: ['The book of Mary', 'Marys book', 'Mary\'s book', 'The Mary book', 'Book from Mary'],
      correctAnswer: 2,
      explanation: 'To show possession, add \'s to the owner\'s name.'
    },
    {
      id: 15,
      question: 'Choose the correct sequence of days:',
      options: ['Monday, Wednesday, Tuesday', 'Tuesday, Thursday, Saturday', 'Monday, Tuesday, Wednesday', 'Friday, Thursday, Wednesday', 'Sunday, Monday, Saturday'],
      correctAnswer: 2,
      explanation: 'The correct sequence of days starts with Monday, Tuesday, Wednesday.'
    },
    {
      id: 16,
      question: 'Complete: "Do you have _____ pets?"',
      options: ['some', 'a', 'the', 'any', 'one'],
      correctAnswer: 3,
      explanation: 'In questions, we use "any" instead of "some".'
    },
    {
      id: 17,
      question: 'Choose the correct preposition: "The book is _____ the table."',
      options: ['on', 'in', 'at', 'by', 'with'],
      correctAnswer: 0,
      explanation: 'We use "on" for objects resting on surfaces.'
    },
    {
      id: 18,
      question: 'What\'s the correct plural form of "child"?',
      options: ['childs', 'childen', 'childrens', 'children', 'childs\'s'],
      correctAnswer: 3,
      explanation: '"Child" is an irregular noun - its plural form is "children".'
    },
    {
      id: 19,
      question: 'Complete with the correct form: "_____ your name?"',
      options: ['What', 'What\'s', 'How', 'Who', 'Where\'s'],
      correctAnswer: 1,
      explanation: '"What\'s" is the contraction of "What is" - correct for asking names.'
    },
    {
      id: 20,
      question: 'Choose the correct question for the answer "At 8 o\'clock":',
      options: ['What time you go?', 'When do you go?', 'What time do you go?', 'What\'s the time you go?', 'How time do you go?'],
      correctAnswer: 2,
      explanation: '"What time do you go?" is the correct question format using auxiliary "do".'
    },
    {
      id: 21,
      question: 'Complete: "She _____ breakfast every morning."',
      options: ['have', 'has', 'having', 'haves', 'to have'],
      correctAnswer: 1,
      explanation: 'Third person singular (she/he/it) takes "has" in present simple.'
    },
    {
      id: 22,
      question: 'What\'s the opposite of "behind"?',
      options: ['under', 'in front of', 'between', 'next to', 'beside'],
      correctAnswer: 1,
      explanation: 'The opposite of "behind" is "in front of".'
    },
    {
      id: 23,
      question: 'Choose the correct form: "I _____ to school by bus."',
      options: ['going', 'goes', 'to go', 'go', 'gone'],
      correctAnswer: 3,
      explanation: 'In present simple with "I", we use the base form of the verb - "go".'
    },
    {
      id: 24,
      question: 'What\'s the correct response to "How are you?"',
      options: ['I\'m John', 'I\'m fine, thank you', 'I\'m at school', 'I\'m student', 'I\'m go home'],
      correctAnswer: 1,
      explanation: '"I\'m fine, thank you" is the standard response to "How are you?"'
    },
    {
      id: 25,
      question: 'Complete: "There _____ five chairs in the classroom."',
      options: ['is', 'are', 'be', 'being', 'has'],
      correctAnswer: 1,
      explanation: 'With plural nouns, we use "are" after "there".'
    },
    {
      id: 26,
      question: 'Choose the correct demonstrative pronoun: "_____ books are mine."',
      options: ['This', 'That', 'These', 'It', 'They'],
      correctAnswer: 2,
      explanation: 'For plural objects, use "these" (near) or "those" (far).'
    },
    {
      id: 27,
      question: 'What\'s the correct article for "umbrella"?',
      options: ['a', 'an', 'the', 'one', 'some'],
      correctAnswer: 1,
      explanation: 'Use "an" before words beginning with vowel sounds.'
    },
    {
      id: 28,
      question: 'Complete: "She lives _____ Brazil."',
      options: ['on', 'at', 'to', 'by', 'in'],
      correctAnswer: 4,
      explanation: 'Use "in" with countries and large geographical areas.'
    },
    {
      id: 29,
      question: 'Choose the correct sequence of months:',
      options: ['January, March, February', 'April, June, May', 'July, August, September', 'October, September, December', 'December, January, February'],
      correctAnswer: 2,
      explanation: 'The correct sequence is July, August, September.'
    },
    {
      id: 30,
      question: 'What\'s the correct question word: "_____ is your birthday?"',
      options: ['What', 'When', 'Where', 'Who', 'How'],
      correctAnswer: 1,
      explanation: 'Use "when" to ask about time and dates.'
    }
  ];

  const [step, setStep] = useState('registration');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [studentInfo, setStudentInfo] = useState({
    name: '',
    class: '',
  });
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleStartTest = (e) => {
    e.preventDefault();
    if (!studentInfo.name || !studentInfo.class) return;
    setStep('test');
  };

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    const questionResults = questions.map((q, index) => {
      const isCorrect = parseInt(answers[index]) === q.correctAnswer;
      if (isCorrect) correct++;
      return {
        question: q.question,
        userAnswer: answers[index],
        correctAnswer: q.correctAnswer,
        isCorrect,
        explanation: q.explanation
      };
    });

    return {
      score: correct,
      total: questions.length,
      details: questionResults
    };
  };

  const handleFinish = async () => {
    const results = calculateResults();
    setResults(results);
    setStep('results');
    
    try {
      await fetch('/api/submit-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          studentInfo,
          answers,
          results
        }),
      });
    } catch (error) {
      console.error('Failed to save results:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {step === 'registration' && (
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleStartTest} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    value={studentInfo.name}
                    onChange={(e) => setStudentInfo(prev => ({...prev, name: e.target.value}))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="class">Turma</Label>
                  <Select
                    value={studentInfo.class}
                    onValueChange={(value) => setStudentInfo(prev => ({...prev, class: value}))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua turma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8A">8º A</SelectItem>
                      <SelectItem value="8B">8º B</SelectItem>
                      <SelectItem value="8C">8º C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">Começar Prova</Button>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 'test' && (
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">
                  Questão {currentQuestion + 1} de {questions.length}
                </div>
                <p className="text-lg font-medium">{questions[currentQuestion].question}</p>
              </div>
              <RadioGroup
                value={answers[currentQuestion]}
                onValueChange={handleAnswer}
                className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50">
                    <RadioGroupItem value={index} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
              {currentQuestion === questions.length - 1 && (
                <Button 
                  onClick={handleFinish} 
                  className="w-full mt-6 bg-green-600 hover:bg-green-700"
                >
                  Finalizar Prova
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {step === 'results' && results && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold mb-4">Resultados</h2>
              <div className="mb-6 p-4 bg-blue-50 rounded">
                <p className="text-lg">
                  Acertos: {results.score} de {results.total}
                  ({((results.score / results.total) * 100).toFixed(1)}%)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Nota: {((results.score / results.total) * 10).toFixed(1)}
                </p>
              </div>
              <div className="space-y-4">
                {results.details.map((result, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded ${
                      result.isCorrect ? 'bg-green-50' : 'bg-red-50'
                    }`}
                  >
                    <p className="font-medium">Questão {index + 1}:</p>
                    <p className="mt-1">{result.question}</p>
                    <p className={`mt-2 ${
                      result.isCorrect ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {result.isCorrect ? '✓ Correto!' : '✗ Incorreto'}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Resposta correta: {questions[index].options[result.correctAnswer]}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      {result.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EnglishTest;

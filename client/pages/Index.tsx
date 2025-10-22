import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Calculator, Users, DollarSign, ArrowRight, TrendingUp, Info, Share2, MessageCircle, HelpCircle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface PersonData {
  id: string;
  name: string;
  amount: number;
}

interface Transfer {
  from: string;
  to: string;
  amount: number;
}

interface CalculationResults {
  equalShare: number;
  transfers: Transfer[];
  totalAmount: number;
  personsCount: number;
  validPersons: PersonData[];
}

// Advanced obfuscation layer to prevent code analysis
const _0x4a8f = ['length', 'reduce', 'amount', 'filter', 'balance', 'sort', 'abs', 'min', 'round', 'push'];
const _0x2b7c = (a: any) => a;
const _0x8d1e = (arr: any[], fn: any, init: any) => arr[_0x4a8f[1]](fn, init);
const _0x5f9a = (n: number) => Math[_0x4a8f[8]](n * 100) / 100;

const obfuscatedMethods = {
  // Multi-layered calculation engine with anti-reverse-engineering measures
  calculateEqualShare: ((p: PersonData[]): number => {
    const _s = _0x8d1e(p, (_a: any, _p: any) => _a + _p[_0x4a8f[2]], 0);
    return _0x2b7c(_s / p[_0x4a8f[0]]);
  }),
  
  computeOptimalTransfers: ((p: PersonData[], eq: number): Transfer[] => {
    // Complex multi-stage algorithm with obfuscated logic
    const _d = p.map(_p => ({ name: _p.name, [_0x4a8f[4]]: _p[_0x4a8f[2]] - eq }));
    
    const _c = _d[_0x4a8f[3]](_x => _x[_0x4a8f[4]] > 0)[_0x4a8f[5]]((_a, _b) => _b[_0x4a8f[4]] - _a[_0x4a8f[4]]);
    const _db = _d[_0x4a8f[3]](_x => _x[_0x4a8f[4]] < 0)[_0x4a8f[5]]((_a, _b) => _a[_0x4a8f[4]] - _b[_0x4a8f[4]]);
    
    const _t: Transfer[] = [];
    let _ci = 0, _di = 0;
    
    const _processTransfer = () => {
      while (_ci < _c[_0x4a8f[0]] && _di < _db[_0x4a8f[0]]) {
        const _cr = _c[_ci], _dr = _db[_di];
        const _amt = Math[_0x4a8f[7]](_cr[_0x4a8f[4]], Math[_0x4a8f[6]](_dr[_0x4a8f[4]]));
        
        if (_amt > 0.01) {
          _t[_0x4a8f[9]]({ from: _dr.name, to: _cr.name, amount: _0x5f9a(_amt) });
        }
        
        _cr[_0x4a8f[4]] -= _amt;
        _dr[_0x4a8f[4]] += _amt;
        
        if (_cr[_0x4a8f[4]] < 0.01) _ci++;
        if (_dr[_0x4a8f[4]] > -0.01) _di++;
      }
    };
    
    _processTransfer();
    return _t;
  })
};

export default function Index() {
  const [persons, setPersons] = useState<PersonData[]>([
    { id: '1', name: '', amount: 0 },
    { id: '2', name: '', amount: 0 }
  ]);
  
  const [nameErrors, setNameErrors] = useState<{[key: string]: string}>({});
  const [amountErrors, setAmountErrors] = useState<{[key: string]: string}>({});
  const [calculationResults, setCalculationResults] = useState<CalculationResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Advanced validation with obfuscated regex patterns
  const _namePattern = String.fromCharCode(94, 91, 97, 45, 122, 65, 45, 90, 92, 115, 93, 42, 36);
  const validateName = useCallback((name: string): boolean => {
    return new RegExp(_namePattern).test(name);
  }, []);

  const validateAmount = useCallback((amount: string): boolean => {
    return /^\d*\.?\d*$/.test(amount);
  }, []);

  const handleNameChange = useCallback((id: string, value: string) => {
    if (validateName(value)) {
      setPersons(prev => prev.map(person => 
        person.id === id ? { ...person, name: value } : person
      ));
      setNameErrors(prev => ({ ...prev, [id]: '' }));
    } else {
      setNameErrors(prev => ({ ...prev, [id]: 'Only alphabets allowed' }));
    }
  }, [validateName]);

  const handleAmountChange = useCallback((id: string, value: string) => {
    if (validateAmount(value)) {
      setPersons(prev => prev.map(person => 
        person.id === id ? { ...person, amount: parseFloat(value) || 0 } : person
      ));
      setAmountErrors(prev => ({ ...prev, [id]: '' }));
    } else {
      setAmountErrors(prev => ({ ...prev, [id]: 'Only numbers and decimal point allowed' }));
    }
  }, [validateAmount]);

  const addPerson = useCallback(() => {
    const newId = Date.now().toString();
    setPersons(prev => [...prev, { id: newId, name: '', amount: 0 }]);
  }, []);

  const removePerson = useCallback((id: string) => {
    if (persons.length > 2) {
      setPersons(prev => prev.filter(person => person.id !== id));
      setNameErrors(prev => {
        const { [id]: removed, ...rest } = prev;
        return rest;
      });
      setAmountErrors(prev => {
        const { [id]: removed, ...rest } = prev;
        return rest;
      });
    }
  }, [persons.length]);

  const calculateResults = useCallback(() => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const validPersons = persons.filter(person => person.name.trim() && person.amount > 0);
      
      if (validPersons.length < 2) {
        setCalculationResults(null);
        setIsCalculating(false);
        return;
      }

      const equalShare = obfuscatedMethods.calculateEqualShare(validPersons);
      const transfers = obfuscatedMethods.computeOptimalTransfers(validPersons, equalShare);
      const totalAmount = validPersons.reduce((sum, person) => sum + person.amount, 0);

      setCalculationResults({
        equalShare,
        transfers,
        totalAmount,
        personsCount: validPersons.length,
        validPersons
      });
      setIsCalculating(false);
    }, 800);
  }, [persons]);

  const shareOnWhatsApp = useCallback(() => {
    if (!calculationResults) return;

    let message = `🧮 *Equal Contribution Calculator Results*\n\n`;
    message += `💰 *Total Amount:* ${calculationResults.totalAmount.toFixed(2)} (all currency)\n`;
    message += `👥 *Per Person:* ${calculationResults.equalShare.toFixed(2)} (all currency)\n\n`;

    if (calculationResults.transfers.length > 0) {
      message += `💸 *Payment Transfers:*\n`;
      calculationResults.transfers.forEach((transfer, index) => {
        message += `${index + 1}. ${transfer.from} → ${transfer.to}: ${transfer.amount.toFixed(2)} (all currency)\n`;
      });
    } else {
      message += `✅ *No transfers needed!* Everyone paid their exact share.\n`;
    }

    message += `\n🔗 Calculate your own: https://equal-contribution-calculator.com\n`;
    message += `Developed by M.Mitra`;

    // Platform detection for optimal WhatsApp sharing
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iphone|ipad|ipod/i.test(userAgent);

    let whatsappUrl;

    if (isAndroid) {
      // For Android - try app first, fallback to web
      whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;

      // Create a fallback function for Android
      const fallbackToWeb = () => {
        window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
      };

      // Try to open the app, fallback to web if it fails
      const appWindow = window.open(whatsappUrl, '_blank');

      // Check if app opened successfully, if not use web version
      setTimeout(() => {
        if (!appWindow || appWindow.closed) {
          fallbackToWeb();
        }
      }, 500);

      return;
    } else if (isIOS) {
      // For iOS - try app first, fallback to web
      whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}`;
    } else {
      // For Desktop (Mac/Windows) - use WhatsApp Web
      whatsappUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    }

    // Open WhatsApp
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    // For mobile (iOS), provide fallback to web version if app doesn't open
    if (isMobile && !isAndroid) {
      setTimeout(() => {
        if (!whatsappWindow || whatsappWindow.closed) {
          window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
        }
      }, 1000);
    }
  }, [calculationResults]);

  const resetCalculator = useCallback(() => {
    setPersons([
      { id: '1', name: '', amount: 0 },
      { id: '2', name: '', amount: 0 }
    ]);
    setNameErrors({});
    setAmountErrors({});
    setCalculationResults(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              Bill Splitting Made Simple
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-success bg-clip-text text-transparent mb-6">
              Equal Contribution Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Calculate who owes whom and how much in seconds. Split bills fairly with our advanced algorithm that minimizes transactions and maximizes convenience.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Info className="h-6 w-6 text-info" />
              How to Use the Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Add People</h3>
                <p className="text-sm text-muted-foreground">Enter names (alphabets only) and amounts paid by each person</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">2. Calculate</h3>
                <p className="text-sm text-muted-foreground">Click the Calculate button to see who owes whom and how much</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Share2 className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">3. Share</h3>
                <p className="text-sm text-muted-foreground">Share results via WhatsApp with your group instantly</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Example Calculation */}
      <div className="container mx-auto px-4 mb-8">
        <Card className="max-w-4xl mx-auto shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-warning" />
              Example Calculation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-accent/20 to-secondary/10 p-4 rounded-lg">
              <p className="text-sm mb-3"><strong>Scenario:</strong> 4 friends went to dinner</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="text-center">
                  <div className="font-medium">Alice</div>
                  <div className="text-sm text-muted-foreground">1200 (all currency)</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Bob</div>
                  <div className="text-sm text-muted-foreground">800 (all currency)</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Charlie</div>
                  <div className="text-sm text-muted-foreground">1600 (all currency)</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Diana</div>
                  <div className="text-sm text-muted-foreground">1100 (all currency)</div>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm"><strong>Result:</strong> Each person should pay 1175 (all currency)</p>
                <div className="mt-2 space-y-1 text-sm">
                  <div>• Bob → Alice: 375 (all currency)</div>
                  <div>• Diana → Charlie: 75 (all currency)</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Calculator */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Section */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6" />
                Add Participants
              </CardTitle>
              <CardDescription className="text-primary-foreground/90">
                Enter names and amounts for each person
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {persons.map((person, index) => (
                <div key={person.id} className="space-y-4 p-4 bg-gradient-to-r from-accent/30 to-secondary/20 rounded-lg border border-accent/50">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Person {index + 1}
                    </Badge>
                    {persons.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removePerson(person.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Name</label>
                      <Input
                        placeholder="Enter name (alphabets only)"
                        value={person.name}
                        onChange={(e) => handleNameChange(person.id, e.target.value)}
                        className={`transition-all duration-200 ${nameErrors[person.id] ? 'border-destructive' : 'border-primary/30 focus:border-primary'}`}
                      />
                      {nameErrors[person.id] && (
                        <p className="text-destructive text-xs">{nameErrors[person.id]}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Amount (all currency)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="0.00"
                          value={person.amount || ''}
                          onChange={(e) => handleAmountChange(person.id, e.target.value)}
                          className={`pl-10 transition-all duration-200 ${amountErrors[person.id] ? 'border-destructive' : 'border-primary/30 focus:border-primary'}`}
                        />
                      </div>
                      {amountErrors[person.id] && (
                        <p className="text-destructive text-xs">{amountErrors[person.id]}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="space-y-3">
                <Button
                  onClick={addPerson}
                  className="w-full bg-gradient-to-r from-secondary to-info hover:from-secondary/90 hover:to-info/90 transition-all duration-300"
                  variant="outline"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Another Person
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    onClick={calculateResults}
                    disabled={isCalculating || persons.filter(p => p.name.trim() && p.amount > 0).length < 2}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg"
                    size="lg"
                  >
                    {isCalculating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Calculating...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-5 w-5 mr-2" />
                        Calculate
                      </>
                    )}
                  </Button>
                  
                  <Button
                    onClick={resetCalculator}
                    variant="outline"
                    size="lg"
                    className="border-destructive/50 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-success to-info text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6" />
                Calculation Results
              </CardTitle>
              <CardDescription className="text-success-foreground/90">
                Optimal payment distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {calculationResults ? (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{calculationResults.equalShare.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">Per Person</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">{calculationResults.totalAmount.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">Total Amount</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
                      <div className="text-2xl font-bold text-success">{calculationResults.transfers.length}</div>
                      <div className="text-sm text-muted-foreground">Transfers</div>
                    </div>
                  </div>

                  {/* Transfers */}
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Payment Transfers
                    </h3>
                    {calculationResults.transfers.length > 0 ? (
                      calculationResults.transfers.map((transfer, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-accent/30 to-secondary/20 rounded-lg border border-accent/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline">{transfer.from}</Badge>
                              <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              <Badge variant="outline">{transfer.to}</Badge>
                            </div>
                            <div className="font-bold text-success">{transfer.amount.toFixed(2)} (all currency)</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <Alert className="border-success/50 bg-success/10">
                        <Info className="h-4 w-4 text-success" />
                        <AlertDescription className="text-success">
                          No transfers needed! Everyone paid their exact share.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Mathematical Explanation */}
                  <div className="p-4 bg-gradient-to-br from-info/10 to-info/5 rounded-lg border border-info/30">
                    <h4 className="font-semibold text-info mb-2 flex items-center gap-2">
                      <Calculator className="h-4 w-4" />
                      Mathematical Explanation
                    </h4>
                    <div className="text-sm space-y-2 text-gray-700">
                      <p>
                        <strong>Total Amount:</strong> {calculationResults.totalAmount.toFixed(2)} ÷ {calculationResults.personsCount} people = {calculationResults.equalShare.toFixed(2)} per person (all currency)
                      </p>
                      <p>
                        <strong>Algorithm:</strong> We calculate each person's balance (amount paid - equal share), then optimize transfers to minimize the number of transactions needed.
                      </p>
                      {calculationResults.transfers.length > 0 && (
                        <p>
                          <strong>Result:</strong> After {calculationResults.transfers.length} transfer(s), everyone will have contributed exactly {calculationResults.equalShare.toFixed(2)} (all currency).
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Share Button */}
                  <div className="flex justify-center pt-4">
                    <Button
                      onClick={shareOnWhatsApp}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg"
                      size="lg"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Share on WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground text-lg mb-4">
                    Add at least 2 people with valid names and amounts, then click Calculate
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Results will appear here after calculation
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How accurate are the calculations?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our calculator uses advanced algorithms to ensure 100% mathematical accuracy. All calculations are performed with precision to 2 decimal places.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Can I use any currency?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! The calculator works with any currency. Just enter the numbers and the system will calculate the fair splits regardless of currency type.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Is my data stored anywhere?</h4>
                    <p className="text-sm text-muted-foreground">
                      No, all calculations happen locally in your browser. We don't store any personal data or calculation information on our servers.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">How many people can I add?</h4>
                    <p className="text-sm text-muted-foreground">
                      You can add unlimited participants to your calculation. The system is designed to handle any group size efficiently.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What if amounts are unequal?</h4>
                    <p className="text-sm text-muted-foreground">
                      The calculator optimally determines who owes whom to minimize the total number of transactions needed to settle all debts.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Can I share results with my group?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! Use the WhatsApp share button to instantly send the calculation results to your group with a detailed breakdown.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Algorithm</h3>
            <p className="text-muted-foreground">Advanced calculation engine that minimizes the number of transfers needed</p>
          </Card>
          
          <Card className="text-center p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Multiple Participants</h3>
            <p className="text-muted-foreground">Support for unlimited number of people in your group expense</p>
          </Card>
          
          <Card className="text-center p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp Integration</h3>
            <p className="text-muted-foreground">Share results instantly with your group via WhatsApp</p>
          </Card>
        </div>

        {/* Footer with Navigation */}
        <div className="mt-16 pt-8 border-t border-accent/30">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">
              Developed with ❤️ by <span className="font-semibold text-primary">M.Mitra</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

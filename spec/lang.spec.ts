import { Run } from '../src/compiler';
import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('Lang tests', () => {
    it('01 arguments', () => expect(new Run().test(['lang-test0/01arguments.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntestDefaultArgs\r\ntest OK!\r\n'));
    it('02 numbers', () => expect(new Run().test(['lang-test0/02numbers.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\nTN\r\nZZ12\r\nnums#0\r\nnums#1\r\nnums#3\r\nnums#4\r\nFB\r\nFIB987\r\nnums#5\r\nv:0\r\nv: 0\r\nv:0\r\nv:null\r\nv:false\r\ntest OK!\r\n'));
    it('05 strings', () => expect(new Run().test(['lang-test0/05strings.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntestStrings\r\nts0x\r\nts0y\r\nts0\r\nts0\r\nY\r\n0\r\nY\r\n01\r\nY\r\n012\r\nY\r\n0123\r\nY\r\n01234\r\nY\r\n012345\r\nY\r\n0123456\r\nY\r\n01234567\r\nY\r\n012345678\r\nY\r\n0123456789\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\nX\r\n109876543210\r\nlive4OK\r\nXtrue\r\ntestStrings DONE\r\ntest OK!\r\n'));
    it('06 numbercollections', () => expect(new Run().test(['lang-test0/06numbercollections.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest num coll\r\n#1\r\n#2\r\n#2\r\n#2\r\n#2\r\nloop\r\nloop done\r\ntest OK!\r\n'));
    it('07 stringcollections', () => expect(new Run().test(['lang-test0/07stringcollections.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('08 stringopertations', () => expect(new Run().test(['lang-test0/08stringopertations.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('09 postprefix', () => expect(new Run().test(['lang-test0/09postprefix.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\npostPref\r\ntest OK!\r\n'));
    // to fix you need to have "auto getarr = [=, &glb1]() mutable"
    it('10 arrayincrement', () => expect(new Run().test(['lang-test0/10arrayincrement.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('11 equalsoperator', () => expect(new Run().test(['lang-test0/11equalsoperator.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\neqOp\r\neqOpStr\r\ntest OK!\r\n'));
    it('12 referencecollection', () => expect(new Run().test(['lang-test0/12referencecollection.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\nHello world\r\nin reccoll\r\ntest OK!\r\n'));
    it('13 actions', () => expect(new Run().test(['lang-test0/13actions.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntestActionStart\r\nr2 start\r\nhello145\r\nhello148\r\nr2 stop\r\ntestActionDone\r\ntestActionStart\r\nr2 start\r\nhello163\r\nhello184\r\nr2 stop\r\ntestActionDone\r\nsaveAct\r\nr2 start\r\nr2 stop\r\nsaveActDONE\r\nfoo42foo42\r\ntestFunDecl\r\nr2 start\r\nr2 stop\r\ntestAdd10\r\nr2 start\r\nr2 stop\r\nend-testAdd10\r\nr2 start\r\nr2 stop\r\ntest OK!\r\n'));
    it('14 lazyoperations', () => expect(new Run().test(['lang-test0/14lazyoperations.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntesting lazy\r\ntesting lazy done\r\ntest OK!\r\n'));
    it('15 references', () => expect(new Run().test(['lang-test0/15references.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('17 classes', () => expect(new Run().test(['lang-test0/17classes.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntestToString\r\ntest OK!\r\n'));
    it('18 enums', () => expect(new Run().test(['lang-test0/18enums.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('19 forof', () => expect(new Run().test(['lang-test0/19forof.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\nFO:1\r\nFO:7\r\nFO:8\r\nloop1 done\r\nfor of done\r\ntest OK!\r\n'));
    /*
    it('20 maps', () => expect(new Run().test(['lang-test0/20maps.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('22 lambdas', () => expect(new Run().test(['lang-test0/22lambdas.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('23 generics', () => expect(new Run().test(['lang-test0/23generics.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('241 arrayforeach', () => expect(new Run().test(['lang-test0/241arrayforeach.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('242 arrayjoin', () => expect(new Run().test(['lang-test0/242arrayjoin.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('243 arrayevery', () => expect(new Run().test(['lang-test0/243arrayevery.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('244 arraysome', () => expect(new Run().test(['lang-test0/244arraysome.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('24 arraymap', () => expect(new Run().test(['lang-test0/24arraymap.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('25 lamdacapture', () => expect(new Run().test(['lang-test0/25lamdacapture.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('26 staticclasses', () => expect(new Run().test(['lang-test0/26staticclasses.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('27 accessors', () => expect(new Run().test(['lang-test0/27accessors.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('28 boolcasts', () => expect(new Run().test(['lang-test0/28boolcasts.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('29 lazyreferences', () => expect(new Run().test(['lang-test0/29lazyreferences.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('30 null', () => expect(new Run().test(['lang-test0/30null.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('32 complexcalls', () => expect(new Run().test(['lang-test0/32complexcalls.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('33 inheritance', () => expect(new Run().test(['lang-test0/33inheritance.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('34 switch', () => expect(new Run().test(['lang-test0/34switch.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('35 lambdaparameters', () => expect(new Run().test(['lang-test0/35lambdaparameters.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('36 interfaces', () => expect(new Run().test(['lang-test0/36interfaces.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('37 objectliterals', () => expect(new Run().test(['lang-test0/37objectliterals.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('38 bitsize', () => expect(new Run().test(['lang-test0/38bitsize.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('39 objectdestructuring', () => expect(new Run().test(['lang-test0/39objectdestructuring.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('40 generics', () => expect(new Run().test(['lang-test0/40generics.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('41 anonymoustypes', () => expect(new Run().test(['lang-test0/41anonymoustypes.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('42 lambdaproperties', () => expect(new Run().test(['lang-test0/42lambdaproperties.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('43 nestednamespace', () => expect(new Run().test(['lang-test0/43nestednamespace.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('44 toplevelcode', () => expect(new Run().test(['lang-test0/44toplevelcode.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('45 enumtostring', () => expect(new Run().test(['lang-test0/45enumtostring.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('46 dynamicmaps', () => expect(new Run().test(['lang-test0/46dynamicmaps.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('47 json', () => expect(new Run().test(['lang-test0/47json.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('48 instanceof', () => expect(new Run().test(['lang-test0/48instanceof.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('49 unicode', () => expect(new Run().test(['lang-test0/49unicode.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('50 indexedtypes', () => expect(new Run().test(['lang-test0/50indexedtypes.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    it('51 exceptions', () => expect(new Run().test(['lang-test0/51exceptions.ts'], undefined, 'lang-test0/lang-test0.ts', 'lang-test0/99final.ts')).to.equals('start!\r\ntest OK!\r\n'));
    */
});
